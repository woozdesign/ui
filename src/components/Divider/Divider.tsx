import React from 'react';
import styles from './Divider.module.scss';
import { ColorProp, combineClassNames } from '@/utils';

interface DividerProps extends ColorProp {
  orientation?: 'horizontal' | 'vertical';
  space?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal', space = 4, color = 'gray' }) => {
  const classes = [orientation === 'horizontal' ? styles.horizontal : styles.vertical, styles[`divider--${space}`]];
  return <div data-accent-color={color} className={combineClassNames(classes)}></div>;
};

export default Divider;
