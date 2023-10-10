'use client';
import { ColorProp, RadiusProp, SizeProp } from '@/utils';
import classNames from 'classnames';
import React, { ChangeEvent, FC, HTMLProps } from 'react';
import { FormChildProps } from '../Form/Form';
import styles from './Switch.module.scss';

interface SwitchProps extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'color' | 'size' | 'onChange'>, ColorProp, SizeProp, RadiusProp, FormChildProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

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
