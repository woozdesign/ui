import React, { FC, useState, useEffect, useRef, useLayoutEffect } from 'react';
import styles from './SplitPanel.module.scss';
import { SplitPaneProps } from './SplitPane.props';
import classNames from 'classnames';

const SplitPanel: FC<SplitPaneProps> = (props) => {
  const { children, split = 'vertical', allowResize = true, minSize = 50, size, color } = props;

  const [paneSizes, setPaneSizes] = useState<Array<number>>([]);
  const [initialSizes, setInitialSizes] = useState<Array<number>>([]);
  const [containerSize, setContainerSize] = useState(0);
  const [isResizing, setIsResizing] = useState<number>(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const numChildren = React.Children.count(children);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      const totalSize = split === 'vertical' ? width : height;
      const initialSize = totalSize / numChildren;
      const initialSizes = Array(numChildren).fill(initialSize);
      setPaneSizes(initialSizes);
      setInitialSizes(initialSizes);
    }
  }, [containerRef, numChildren, split]);

  useEffect(() => {
    if (isResizing >= 0) {
      setInitialSizes([...paneSizes]);
    }
  }, [isResizing, paneSizes]);

  const handleResize = (index: number, delta: number) => {
    if (!allowResize) return;
    setPaneSizes((currentSizes) => {
      const updatedSizes = [...initialSizes];
      const newSize = initialSizes[index] + delta;
      let isPreviousPaneMinimized = false;

      if (newSize < minSize) {
        let remainingDelta = minSize - newSize;
        updatedSizes[index] = minSize;

        for (let i = index - 1; i >= 0; i--) {
          if (remainingDelta > 0) {
            const prevPaneNewSize = updatedSizes[i] - remainingDelta;

            if (prevPaneNewSize < minSize) {
              remainingDelta -= updatedSizes[i] - minSize;
              updatedSizes[i] = minSize;
            } else {
              updatedSizes[i] = prevPaneNewSize;
              remainingDelta = 0;
            }
          }
        }

        // Check if all previous panes are at minSize
        isPreviousPaneMinimized = updatedSizes.slice(0, index).every((size) => size === minSize);
      }

      updatedSizes[index] = newSize;
      // Adjust the next pane's size
      if (index < numChildren - 1 && !isPreviousPaneMinimized) {
        updatedSizes[index + 1] = updatedSizes[index + 1] - delta;
        return updatedSizes;
      }

      return currentSizes;
    });
  };
  const onMouseDown = (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
    setIsResizing(index);

    const startPosition = split === 'vertical' ? e.clientX : e.clientY;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const currentPosition = split === 'vertical' ? moveEvent.clientX : moveEvent.clientY;
      const delta = currentPosition - startPosition;
      handleResize(index, delta);
    };

    const onMouseUp = () => {
      setIsResizing(-1);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const renderPanes = () => {
    let accumulatedSize = 0;
    const containerSize = (split === 'vertical' ? containerRef?.current?.offsetWidth : containerRef?.current?.offsetHeight) ?? 0;

    return React.Children.map(children, (child, index) => {
      let size;
      if (index === numChildren - 1) {
        // For the last pane, calculate size to fill remaining space but not less than minSize
        size = Math.max(containerSize - accumulatedSize, minSize);
      } else {
        // Calculate the maximum size for the current pane
        const maxPaneSize = containerSize - accumulatedSize - (numChildren - index - 1) * minSize;
        // Determine the size of the current pane
        size = paneSizes[index] || 0;
        size = Math.min(size, maxPaneSize);
        size = Math.max(size, minSize);
      }

      // Update the accumulatedSize
      accumulatedSize += size;

      // Ensure accumulatedSize does not exceed containerSize - minSize for all but last pane
      if (index < numChildren - 1) {
        accumulatedSize = Math.min(accumulatedSize, containerSize - minSize);
      }

      // Calculate the left/top position for the pane
      const paneLeft = accumulatedSize - size;

      // Set the style for the pane
      const paneStyle = split === 'vertical' ? { left: `${paneLeft}px`, width: `${size}px` } : { top: `${paneLeft}px`, height: `${size}px` };

      // Prepare resizer style
      let resizerStyle = {};
      if (index < numChildren - 1) {
        resizerStyle = split === 'vertical' ? { left: `${accumulatedSize}px` } : { top: `${accumulatedSize}px` };
      }

      return (
        <React.Fragment key={index}>
          <div className={styles.pane} style={paneStyle}>
            {child}
          </div>
          {index < numChildren - 1 && (
            <div className={classNames(styles.resizer, { [styles['disabled']]: !allowResize })} data-split={split} onMouseDown={onMouseDown(index)} style={resizerStyle} />
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <div data-accent-color={color} className={styles.container} ref={containerRef}>
      {renderPanes()}
    </div>
  );
};

export default SplitPanel;
