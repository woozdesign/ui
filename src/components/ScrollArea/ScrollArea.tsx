'use client';
import { ColorProp, RadiusProp } from '@/utils';
import React, { useEffect, useRef } from 'react';
import styles from './ScrollArea.module.scss';
import classNames from 'classnames';
interface ScrollAreaProps extends RadiusProp, ColorProp {
  id: string; // Add this line
  type?: 'always' | 'auto';
  scrollbars?: 'vertical' | 'horizontal';
  persistant?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({ id, persistant = false, color, radius, type = 'auto', scrollbars = 'vertical', style, children }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const key = 'scrollPosition' + '_' + id; // Combine path and id
  useEffect(() => {
    // Only execute if id is provided
    if (id && persistant) {
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

      window.onbeforeunload = () => {
        if (scrollRef.current) {
          if (scrollbars === 'vertical') {
            sessionStorage.setItem(key, String(scrollRef.current.scrollTop));
          } else if (scrollbars === 'horizontal') {
            sessionStorage.setItem(key, String(scrollRef.current.scrollLeft));
          }
        }
      };

      // Cleanup listener on unmount
      return () => {
        window.onbeforeunload = null;
      };
    }
  }, [scrollRef, scrollbars, id, persistant]);

  const classes = classNames(styles.scrollArea, {
    [styles.vertical]: scrollbars == 'vertical' && type == 'always',
    [styles.horizontal]: scrollbars == 'horizontal' && type == 'always',
  });

  return (
    <div ref={scrollRef} data-accent-color={color} data-radius={radius} className={classes} style={style}>
      {children}
    </div>
  );
};

export default ScrollArea;
