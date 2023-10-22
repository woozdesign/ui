'use client';
import classNames from 'classnames';
import React from 'react';
import styles from './Divider.module.scss';
import { DividerProps } from './Divider.props';
import { extractMarginProps, extractPaddingProps, withMarginProps, withPaddingProps } from '@/utils';

const Divider: React.FC<DividerProps> = (props) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { others: paddingOthers, ...paddingProps } = extractPaddingProps(marginOthers);
  const { orientation = 'horizontal', color } = paddingOthers;

  const classes = classNames(
    { [styles.horizontal]: orientation === 'horizontal', [styles.vertical]: orientation === 'vertical' },
    withMarginProps(marginProps),
    withPaddingProps(paddingProps),
  );

  return <div data-accent-color={color} className={classes}></div>;
};

export default Divider;
