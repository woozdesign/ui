import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './ScrollArea.module.scss';
import { ScrollAreaProps } from './ScrollArea.props';
import { extractMarginProps, extractPaddingProps, withBreakpoints, withMarginProps, withPaddingProps } from '@/utils';

const ScrollArea: React.FC<ScrollAreaProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { others: otherPaddingProps, ...paddingProps } = extractPaddingProps(otherMarginProps);
  const { className, style, children, id, persistent = false, color, radius, type = 'always', scrollbars = 'vertical', size } = otherPaddingProps;

  const [scrollKey, setScrollKey] = useState('scrollPosition' + '_' + id);

  useEffect(() => {
    if (id && persistent) {
      const savedScroll = sessionStorage.getItem(scrollKey);
      if (savedScroll) {
        const scrollElement = document.querySelector(`[data-scroll-key="${scrollKey}"]`);
        if (scrollElement) {
          if (scrollbars === 'vertical') {
            scrollElement.scrollTop = Number(savedScroll);
          } else if (scrollbars === 'horizontal') {
            scrollElement.scrollLeft = Number(savedScroll);
          }
        }
      }
    }
  }, [id, persistent, scrollbars]);

  const saveScrollState = (e: React.UIEvent<HTMLDivElement>) => {
    const key = e.currentTarget.getAttribute('data-scroll-key');
    const direction = e.currentTarget.getAttribute('data-scroll-direction');
    if (key && direction) {
      if (direction === 'vertical') {
        sessionStorage.setItem(key, String(e.currentTarget.scrollTop));
      } else if (direction === 'horizontal') {
        sessionStorage.setItem(key, String(e.currentTarget.scrollLeft));
      }
    }
  };

  const classes = classNames(
    styles.scrollArea,
    {
      [styles.vertical]: scrollbars == 'vertical' && type == 'always',
      [styles.horizontal]: scrollbars == 'horizontal' && type == 'always',
    },
    withBreakpoints(size, 'wd-scrollArea', styles),
    withMarginProps(marginProps),
    withPaddingProps(paddingProps),
  );

  return (
    <div onScroll={saveScrollState} data-scroll-key={scrollKey} data-scroll-direction={scrollbars} data-accent-color={color} data-radius={radius} className={classes} style={style}>
      {children}
    </div>
  );
};

export default ScrollArea;
