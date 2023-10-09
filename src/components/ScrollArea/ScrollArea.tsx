'use client';
import React from 'react';
import styles from './ScrollArea.module.scss';
import { ColorProp, RadiusProp } from '@/utils';

interface ScrollAreaProps extends RadiusProp, ColorProp {
  type?: 'always' | 'auto';
  scrollbars?: 'vertical' | 'horizontal';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({ color, radius, type = 'auto', scrollbars, style, children }) => {
  const classNames = [styles.scrollArea];

  if (type === 'always') {
    if (scrollbars === 'vertical') {
      classNames.push(styles.alwaysVertical);
    } else if (scrollbars === 'horizontal') {
      classNames.push(styles.alwaysHorizontal);
    }
  }

  return (
    <div data-accent-color={color} data-radius={radius} className={classNames.join(' ')} style={style}>
      {children}
    </div>
  );
};

export default ScrollArea;
