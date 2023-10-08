import React, { FC } from 'react';
import styles from './ProgressLinear.module.scss';
import { ColorProp, RadiusProp, SizeProp } from '@/utils';

interface ProgressLinearProps extends ColorProp, RadiusProp {
  value?: number; // Progress from 0 to 100
  indeterminate?: boolean;
  height?: number;
  rounded?: boolean;
}

const ProgressLinear: FC<ProgressLinearProps> = ({ value = 0, indeterminate, color, height = 4, radius }) => {
  if (value > 100) value = 100;
  if (value < 0) value = 0;

  return (
    <div data-radius={radius} data-accent-color={color} className={`${styles.progressLinear} ${indeterminate ? styles.indeterminate : ''}`} style={{ height: height }}>
      <div className={styles.linearBackground}></div>
      {(value && value > 0) || indeterminate ? <div className={styles.linearPath} style={{ width: `${value}%` }}></div> : null}
    </div>
  );
};

export default ProgressLinear;
