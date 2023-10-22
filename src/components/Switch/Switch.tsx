'use client';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Switch.module.scss';
import { SwitchProps } from './Switch.props';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';

const Switch: FC<SwitchProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { className, style, children, color, radius, size = 'medium', onChange, ...others } = otherMarginProps;

  const classes = classNames(styles.switch, className, withBreakpoints(size, 'wd-switch', styles), withMarginProps(marginProps));

  return (
    <label className={classes} data-accent-color={color} data-radius={radius}>
      <input type="checkbox" {...others} className={styles.input} onChange={onChange} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Switch;
