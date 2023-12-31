import React, { FC, useState, useEffect, useRef } from 'react';
import styles from './SplitPanel.module.scss';
import { SplitPaneProps } from './SplitPane.props';
import classNames from 'classnames';

type MinSize = {
  horizontal: number;
  vertical: number;
};

const SplitPanel: FC<SplitPaneProps> = (props) => {
  const { children, split = 'vertical', allowResize = true, minSize = 50, size, color } = props;

  const [paneSizes, setPaneSizes] = useState<Array<number>>([]);
  const [initialSizes, setInitialSizes] = useState<Array<number>>([]);
  const [isResizing, setIsResizing] = useState<number>(-1);

  // New state to track each child's minSize
  const [childMinSizes, setChildMinSizes] = useState<Array<MinSize>>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const numChildren = React.Children.count(children);

  useEffect(() => {
    if (containerRef.current) {
      const totalSize = split === 'vertical' ? containerRef.current.offsetWidth : containerRef.current.offsetHeight;
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

  const calculateMinSize = (children, splitDirection) => {
    return React.Children.map(children, (child) => {
      // Default minimum sizes
      let minHorizontal = child.props.minSize || minSize;
      let minVertical = child.props.minSize || minSize;

      // Check if the child is a SplitPanel
      if (child.type && child.type.name === 'SplitPanel') {
        const childSplitDirection = child.props.split || 'vertical';
        // Recursively calculate the minSize for each child of the SplitPanel
        const childMinSizes = calculateMinSize(child.props.children, splitDirection);

        if (childSplitDirection === splitDirection) {
          console.log('childSplitDirection: ', childSplitDirection);
          // Accumulate sizes in the same direction
          if (childSplitDirection === 'vertical') {
            minVertical = childMinSizes.reduce((total, size) => total + size.vertical, 0);
          } else {
            minHorizontal = childMinSizes.reduce((total, size) => total + size.horizontal, 0);
          }
        } else {
          // Take the max size in the same direction, accumulate in the different direction
          if (childSplitDirection == 'vertical') {
            minHorizontal = Math.max(
              minHorizontal,
              childMinSizes.reduce((total, size) => Math.max(total, size.horizontal), 0),
            );
          } else {
            minVertical = Math.max(
              minVertical,
              childMinSizes.reduce((total, size) => Math.max(total, size.vertical), 0),
            );
          }
        }
      } else {
        // Use the minSize specified by the child, if available
        if (child.props.minSize) {
          minHorizontal = minVertical = child.props.minSize;
        }
      }

      // Return the calculated minimum sizes
      return { horizontal: minHorizontal, vertical: minVertical };
    });
  };

  // useEffect to initialize pane sizes and child minSizes
  useEffect(() => {
    if (containerRef.current) {
      const totalSize = split === 'vertical' ? containerRef.current.offsetWidth : containerRef.current.offsetHeight;
      const initialSize = totalSize / numChildren;

      // Calculate initial sizes and child minSizes
      const initialSizes = Array(numChildren).fill(initialSize);
      const minSizes = calculateMinSize(children, split);
      console.log('minSizes: ', minSizes);

      setPaneSizes(initialSizes);
      setInitialSizes(initialSizes);
      setChildMinSizes(minSizes);
    }
  }, [containerRef, numChildren, split, children]); // Added 'children' to dependencies

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

  useEffect(() => {
    if (containerRef.current) {
      // Define a function to handle resize events
      const handleResize = (entries) => {
        const entry = entries[0];
        if (entry) {
          const newContainerSize = split === 'vertical' ? entry.contentRect.width : entry.contentRect.height;
          const oldContainerSize = split === 'vertical' ? containerRef.current.offsetWidth : containerRef.current.offsetHeight;
          const resizeRatio = newContainerSize / oldContainerSize;

          // Adjust paneSizes based on the resize ratio
          setPaneSizes((currentSizes) => currentSizes.map((size) => Math.max(size * resizeRatio, minSize)));
        }
      };

      // Create a new ResizeObserver
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(containerRef.current);

      // Cleanup function
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [split, minSize]);

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
      const minSize = childMinSizes[index] && (childMinSizes[index][split] || 50); // Use the calculated minSize for each child
      // console.log('minSize: ', minSize);
      if (index === numChildren - 1) {
        // For the last pane, calculate size to fill remaining space but not less than minSize
        size = Math.max(containerSize - accumulatedSize, minSize);
      } else {
        // Calculate the total minimum size required for subsequent panes
        const totalMinSizeForSubsequentPanes = childMinSizes.slice(index + 1).reduce((total, size) => total + size[split], 0);

        // Calculate the maximum size for the current pane
        const maxPaneSize = containerSize - accumulatedSize - totalMinSizeForSubsequentPanes;
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
