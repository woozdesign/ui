'use client';
import { ColorProp, RadiusProp } from '@/utils';
import React from 'react';
import styles from './ScrollArea.module.scss';
import classNames from 'classnames';

interface ScrollAreaProps extends RadiusProp, ColorProp {
  type?: 'always' | 'auto';
  scrollbars?: 'vertical' | 'horizontal';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({ color, radius, type = 'auto', scrollbars = 'vertical', style, children }) => {
  const classes = classNames(styles.scrollArea, {
    [styles.vertical]: scrollbars == 'vertical' && type == 'always',
    [styles.horizontal]: scrollbars == 'horizontal' && type == 'always',
  });

  return (
    <div data-accent-color={color} data-radius={radius} className={classes} style={style}>
      {children}
    </div>
  );
};

export default ScrollArea;
