'use client';
import React, { FC, HTMLProps, ChangeEvent } from 'react';
import styles from './Switch.module.scss';
import { ColorProp, RadiusProp, SizeProp, combineClassNames } from '@/utils';
import { FormChildProps } from '../Form/Form';

interface SwitchProps extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'color' | 'size' | 'onChange'>, ColorProp, SizeProp, RadiusProp, FormChildProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Switch: FC<SwitchProps> = ({ color, radius, size = 'medium', onChange, ...props }) => {
  const classNameList = [styles.switch, styles[`switch--${size}`]];

  return (
    <label className={combineClassNames(classNameList)} data-accent-color={color} data-radius={radius}>
      <input type="checkbox" {...props} className={styles.input} onChange={onChange} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Switch;
