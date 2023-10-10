'use client';
import React, { useState, FC } from 'react';
import styles from './Avatar.module.scss';
import { ColorProp, RadiusProp, SizeProp } from '@/utils';

export interface AvatarProps extends SizeProp, ColorProp, RadiusProp {
  src?: string;
  fallback: string;
}

const Avatar: FC<AvatarProps> = ({ src, fallback, size = 'medium', radius, color }) => {
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    setImgError(true);
  };

  return (
    <div className={`${styles.avatar} ${styles[size]}`} data-accent-color={color} data-radius={radius}>
      {src && !imgError ? <img src={src} alt="avatar" onError={handleError} /> : <span>{fallback}</span>}
    </div>
  );
};

export default Avatar;
