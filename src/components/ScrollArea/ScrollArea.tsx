'use client';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import styles from './ScrollArea.module.scss';
import { ScrollAreaProps } from './ScrollArea.props';
import { extractMarginProps, extractPaddingProps, withBreakpoints, withMarginProps, withPaddingProps } from '@/utils';

const ScrollArea: React.FC<ScrollAreaProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { others: otherPaddingProps, ...paddingProps } = extractPaddingProps(otherMarginProps);
  const { className, style, children, id, persistent = false, color, radius, type = 'always', scrollbars = 'vertical', size } = otherPaddingProps;

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

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const key = 'scrollPosition' + '_' + id; // Combine path and id
  useEffect(() => {
    // Only execute if id is provided
    if (id && persistent) {
      if (scrollRef.current && sessionStorage[key]) {
        const savedScroll = sessionStorage.getItem(key);
        if (savedScroll) {
          if (scrollbars === 'vertical') {
            scrollRef.current.scrollTop = Number(savedScroll);
          } else if (scrollbars === 'horizontal') {
            scrollRef.current.scrollLeft = Number(savedScroll);
          }
        }
      }

      const saveScrollState = () => {
        if (scrollRef.current) {
          if (scrollbars === 'vertical') {
            sessionStorage.setItem(key, String(scrollRef.current.scrollTop));
          } else if (scrollbars === 'horizontal') {
            sessionStorage.setItem(key, String(scrollRef.current.scrollLeft));
          }
        }
      };

      // Add event listener to the scrollRef's scroll event
      if (scrollRef.current) {
        scrollRef.current.addEventListener('scroll', saveScrollState);
      }

      // Cleanup event listener on unmount
      return () => {
        if (scrollRef.current) {
          scrollRef.current.removeEventListener('scroll', saveScrollState);
        }
      };
    }
  }, [scrollRef.current, scrollbars, id, persistent]);

  return (
    <div ref={scrollRef} data-accent-color={color} data-radius={radius} className={classes} style={style}>
      {children}
    </div>
  );
};

export default ScrollArea;
