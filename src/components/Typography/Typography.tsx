'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Typography.module.scss';
import { HeadingProps, StrongProps, TextProps } from './Typography.props';

const Heading: FC<HeadingProps> = ({ variant = 'h1', size = 8, align = 'start', color = 'gray', weight = 'bold', highContrast = true, children, className = '', ...other }) => {
  const Tag = variant as keyof JSX.IntrinsicElements;

  const headingStyle = classNames(
    styles[`heading--${size}`],
    styles[`heading--${weight}`],
    styles[`heading--${align}`],
    { [styles[`heading--highContrast`]]: highContrast },
    className,
  );

  return (
    <Tag className={headingStyle} data-accent-color={color} {...other}>
      {children}
    </Tag>
  );
};

const Text: FC<TextProps> = ({ children, size = 4, color = 'gray', align = 'start', weight = 'normal', variant = 'span', highContrast = true, className, ...other }) => {
  const textStyle = classNames(styles[`text--${size}`], styles[`text--${weight}`], styles[`heading--${align}`], { [styles[`text--highContrast`]]: highContrast }, className);
  const Tag = variant as keyof JSX.IntrinsicElements;

  return (
    <Tag className={textStyle} data-accent-color={color} {...other}>
      {children}
    </Tag>
  );
};

const Strong: FC<StrongProps> = ({ children, ...other }) => {
  return <strong>{children}</strong>;
};

const Typography = {
  Heading,
  Text,
  Strong,
};

export default Typography;
