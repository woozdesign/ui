'use client';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Badge.module.scss';
import { BadgeProps } from './Badge.props';
import { extractMarginProps, withMarginProps } from '@/utils';

const Badge: FC<BadgeProps> = (props) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { variant = 'ghost', label, color, highContrast = false, radius } = marginOthers;

  const classes = classNames(styles.badge, withMarginProps(marginProps), styles[`badge--${variant}`], { [styles['highContrast']]: highContrast });

  return (
    <div className={classes} data-accent-color={color} data-radius={radius}>
      {label}
    </div>
  );
};

export default Badge;
