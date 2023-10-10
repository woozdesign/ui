'use client';
import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Badge.module.scss';
import { ColorProp, RadiusProp, SizeProp } from '@/utils';

interface BadgeProps extends ColorProp, SizeProp, RadiusProp {
  variant?: 'solid' | 'ghost' | 'outlined';
  label: string | number;
  highContrast?: boolean;
}

const Badge: FC<BadgeProps> = ({ variant = 'ghost', label, color, highContrast = false, radius }) => {
  const classes = classNames(styles.badge, styles[`badge--${variant}`], { [styles['badge--high-contrast']]: highContrast });

  return (
    <div className={classes} data-accent-color={color} data-radius={radius}>
      {label}
    </div>
  );
};

export default Badge;
