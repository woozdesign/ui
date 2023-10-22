'use client';
import React, { FC } from 'react';
import styles from './ProgressLinear.module.scss';
import { ProgressLinearProps } from './ProgressLinear.props';
import classNames from 'classnames';
import { extractMarginProps, withMarginProps } from '@/utils';

const ProgressLinear: FC<ProgressLinearProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { indeterminate, color, height = 4, radius } = otherMarginProps;
  let { value = 0 } = otherMarginProps;

  const classes = classNames(styles.progressLinear, { [styles.indeterminate]: indeterminate }, withMarginProps(marginProps));
  if (value > 100) value = 100;
  if (value < 0) value = 0;

  return (
    <div data-radius={radius} data-accent-color={color} className={classes} style={{ height: height }}>
      <div className={styles.linearBackground}></div>
      {(value && value > 0) || indeterminate ? <div className={styles.linearPath} style={{ width: `${value}%` }}></div> : null}
    </div>
  );
};

export default ProgressLinear;
