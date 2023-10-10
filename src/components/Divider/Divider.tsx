'use client';
import { ColorProp, SpaceSizeProp } from '@/utils';
import classNames from 'classnames';
import React from 'react';
import styles from './Divider.module.scss';

interface DividerProps extends ColorProp, SpaceSizeProp {
  orientation?: 'horizontal' | 'vertical';
}

const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal', space = 4, color = 'gray' }) => {
  const classes = classNames(orientation === 'horizontal' ? styles.horizontal : styles.vertical, styles[`divider--${space}`]);
  return <div data-accent-color={color} className={classes}></div>;
};

export default Divider;
