'use client';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import Image from '../Image';
import styles from './Avatar.module.scss';
import { AvatarProps } from './Avatar.props';

const Avatar: FC<AvatarProps> = (props) => {
  console.log('styles: ', styles);
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { src, fallback, size = 'medium', radius, color } = marginOthers;

  const classes = classNames(styles.avatar, withBreakpoints(size, 'wd-avatar', styles), withMarginProps(marginProps));

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
