'use client';
import classNames from 'classnames';
import React from 'react';
import styles from './Divider.module.scss';
import { DividerProps } from './Divider.props';

const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal', space = 4, color = 'gray' }) => {
  const classes = classNames(orientation === 'horizontal' ? styles.horizontal : styles.vertical, styles[`divider--${space}`]);
  return <div data-accent-color={color} className={classes}></div>;
};

export default Divider;
