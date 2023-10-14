'use client';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Switch.module.scss';
import { SwitchProps } from './Switch.props';

const Switch: FC<SwitchProps> = ({ color, radius, size = 'medium', onChange, ...props }) => {
  const classNameList = classNames(styles.switch, styles[`switch--${size}`]);

  return (
    <label className={classNameList} data-accent-color={color} data-radius={radius}>
      <input type="checkbox" {...props} className={styles.input} onChange={onChange} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Switch;
