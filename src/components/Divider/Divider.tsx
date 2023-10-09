'use client';
import React from 'react';
import styles from './Divider.module.scss';
import { ColorProp, SpaceSizeProp, combineClassNames } from '@/utils';

interface DividerProps extends ColorProp, SpaceSizeProp {
  orientation?: 'horizontal' | 'vertical';
}

const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal', space = 4, color = 'gray' }) => {
  const classes = [orientation === 'horizontal' ? styles.horizontal : styles.vertical, styles[`divider--${space}`]];
  return <div data-accent-color={color} className={combineClassNames(classes)}></div>;
};

export default Divider;
