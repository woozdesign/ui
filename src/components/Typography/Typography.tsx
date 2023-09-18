'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import styles from './Typography.module.scss';
import { combineClassNames } from '@/utils/helper/combineClassNames';

interface TypographyProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
interface TitleProps extends TypographyProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6 | number;
  type?: 'default' | 'primary';
}

const Title: FC<TitleProps> = ({ level = 2, type = 'default', children, className = '', ...other }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const titleStyle = styles[`title-${level}`];
  const combinedClass = combineClassNames([titleStyle, className]);

  return (
    <Tag {...other} className={combinedClass}>
      {children}
    </Tag>
  );
};

const Subtitle: FC<TitleProps> = ({ level = 6, type = 'default', children, className = '', ...other }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const titleStyle = styles[`subtitle-${level}`];
  const combinedClass = combineClassNames([titleStyle, className]);

  return (
    <Tag {...other} className={combinedClass}>
      {children}
    </Tag>
  );
};

interface TextProps extends Omit<React.HTMLProps<HTMLSpanElement>, 'size'> {
  type?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Text: FC<TextProps> = ({ children, type = 'default', size = 'medium', className = '', ...other }) => {
  const textStyle = styles[`text-${type}--${size}`];

  const combinedClass = combineClassNames([textStyle, className]);

  return (
    <span {...other} className={combinedClass}>
      {children}
    </span>
  );
};

interface ParagraphProps extends Omit<React.HTMLProps<HTMLParagraphElement>, 'size'> {
  type?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Paragraph: FC<ParagraphProps> = ({ children, type = 'default', size = 'medium', className = '', ...other }) => {
  const textStyle = styles[`text-${type}--${size}`];
  const combinedClass = combineClassNames([textStyle, className]);

  return (
    <p {...other} className={combinedClass}>
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
