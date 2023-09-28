'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { combineClassNames } from '../../utils/helper/combineClassNames';
import React, { FC } from 'react';
import styles from './Typography.module.scss';
import { ParagraphProps, TextProps, TitleProps } from './Typography.props';

const Title: FC<TitleProps> = ({ level = 2, color = 'gray', children, className = '', ...other }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const titleStyle = styles[`title-${level}`];
  const combinedClass = combineClassNames([titleStyle, className]);

  return (
    <Tag className={combinedClass} data-accent-color={color} {...other}>
      {children}
    </Tag>
  );
};

const Subtitle: FC<TitleProps> = ({ level = 6, color = 'gray', children, className = '', ...other }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const titleStyle = styles[`subtitle-${level}`];
  const combinedClass = combineClassNames([titleStyle, className]);

  return (
    <Tag className={combinedClass} data-accent-color={color} {...other}>
      {children}
    </Tag>
  );
};

const Text: FC<TextProps> = ({ children, size = 'medium', color = 'gray', className = '', ...other }) => {
  const textStyle = styles[`text--${size}`];

  const combinedClass = combineClassNames([textStyle, className]);

  return (
    <span className={combinedClass} data-accent-color={color} {...other}>
      {children}
    </span>
  );
};

const Paragraph: FC<ParagraphProps> = ({ children, color = 'gray', size = 'medium', className = '', ...other }) => {
  const textStyle = styles[`text--${size}`];
  const combinedClass = combineClassNames([textStyle, className]);

  return (
    <p className={combinedClass} data-accent-color={color} {...other}>
      {children}
    </p>
  );
};

const Typography = {
  Title,
  Text,
  Subtitle,
  Paragraph,
};

export default Typography;
