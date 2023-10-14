'use client';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Badge.module.scss';
import { BadgeProps } from './Badge.props';

const Badge: FC<BadgeProps> = ({ variant = 'ghost', label, color, highContrast = false, radius }) => {
  const classes = classNames(styles.badge, styles[`badge--${variant}`], { [styles['badge--high-contrast']]: highContrast });

  return (
    <div className={classes} data-accent-color={color} data-radius={radius}>
      {label}
    </div>
  );
};

export default Badge;
