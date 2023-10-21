'use client';
import { extractMarginProps, withMarginProps } from '@/utils';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import Image from '../Image';
import styles from './Avatar.module.scss';
import { AvatarProps } from './Avatar.props';

const Avatar: FC<AvatarProps> = (props) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { src, fallback, size = 'medium', radius, color } = marginOthers;

  const classes = classNames(styles.avatar, styles[`avatar--${size}`], withMarginProps(marginProps));

  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    setImgError(true);
  };

  return (
    <div className={classes} data-accent-color={color} data-radius={radius}>
      {src && !imgError ? <Image src={src} alt="avatar" onError={handleError} /> : <span>{fallback}</span>}
    </div>
  );
};

export default Avatar;
