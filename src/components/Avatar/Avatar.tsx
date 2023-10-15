'use client';
import React, { useState, FC } from 'react';
import styles from './Avatar.module.scss';
import { AvatarProps } from './Avatar.props';
import Image from '../Image';

const Avatar: FC<AvatarProps> = ({ src, fallback, size = 'medium', radius, color }) => {
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    setImgError(true);
  };

  return (
    <div className={`${styles.avatar} ${styles[size]}`} data-accent-color={color} data-radius={radius}>
      {src && !imgError ? <Image src={src} alt="avatar" onError={handleError} /> : <span>{fallback}</span>}
    </div>
  );
};

export default Avatar;
