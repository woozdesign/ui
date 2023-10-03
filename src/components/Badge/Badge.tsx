import React, { FC } from 'react';
import { combineClassNames } from '@/utils/helper/combineClassNames';
import styles from './Badge.module.scss';
import { ColorProp, RadiusProp, SizeProp } from '@/utils';

interface BadgeProps extends ColorProp, SizeProp, RadiusProp {
  variant?: 'primary' | 'secondary' | 'outlined';
  label: string | number;
}

const Badge: FC<BadgeProps> = ({ variant = 'secondary', label, color, radius }) => {
  const classNameList = [styles.badge, styles[`badge--${variant}`]];

  return (
    <div className={combineClassNames(classNameList)} data-accent-color={color} data-radius={radius}>
      {label}
    </div>
  );
};

export default Badge;
