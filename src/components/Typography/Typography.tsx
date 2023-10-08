'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { combineClassNames } from '@/utils/helper/combineClassNames';
import React, { FC } from 'react';
import styles from './Typography.module.scss';
import { TextProps, HeadingProps, StrongProps } from './Typography.props';

const Heading: FC<HeadingProps> = ({ variant = 'h1', size = 8, align = 'start', color = 'gray', weight = 'bold', highContrast = true, children, className = '', ...other }) => {
  const Tag = variant as keyof JSX.IntrinsicElements;

  const headingStyle = [styles[`heading--${size}`], styles[`heading--${weight}`], styles[`heading--${align}`], highContrast ? styles[`heading--highContrast`] : ''];
  const combinedClass = combineClassNames([...headingStyle, className]);

  return (
    <Tag className={combinedClass} data-accent-color={color} {...other}>
      {children}
    </Tag>
  );
};

const Text: FC<TextProps> = ({ children, size = 4, color = 'gray', weight = 'normal', variant = 'span', highContrast = true, className, ...other }) => {
  const textStyle = [styles[`text--${size}`], styles[`text--${weight}`], highContrast ? styles[`text--highContrast`] : '', className ?? ''];
  const Tag = variant as keyof JSX.IntrinsicElements;

  const combinedClass = combineClassNames([...textStyle]);

  return (
    <Tag className={combinedClass} data-accent-color={color} {...other}>
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
