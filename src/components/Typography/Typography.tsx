'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Typography.module.scss';
import { CodeProps, GradientProps, HeaderProps, LinkProps, StrongProps, TextProps } from './Typography.props';

const Header: FC<HeaderProps> = ({ variant = 'h2', size = 8, align = 'start', color = 'gray', weight = 'bold', highContrast = true, children, className = '', ...other }) => {
  const Tag = variant as keyof JSX.IntrinsicElements;

  const headingStyle = classNames(styles[`heading--${size}`], styles[`heading--${weight}`], styles[`heading--${align}`], { [styles[`highContrast`]]: highContrast }, className);

  return (
    <Tag className={headingStyle} data-accent-color={color} {...other}>
      {children}
    </Tag>
  );
};

const Text: FC<TextProps> = ({ children, size = 4, color = 'gray', align = 'start', weight = 'normal', variant = 'span', highContrast = true, className, ...other }) => {
  const textStyle = classNames(styles[`text--${size}`], styles[`text--${weight}`], styles[`text--${align}`], { [styles[`highContrast`]]: highContrast }, className);
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

const Link: FC<LinkProps> = ({ children, href, color, size = 4, highContrast = false, onClick, className, target, ...other }) => {
  const classes = classNames(styles[`link--${size}`], { [styles[`highContrast`]]: highContrast }, className);
  return (
    <a href={href} target={target} onClick={onClick} data-accent-color={color} className={classes} {...other}>
      {children}
    </a>
  );
};

const Code: FC<CodeProps> = ({ children, color, size = 4, radius, highContrast = false, className, ...other }) => {
  const classes = classNames(styles[`code--${size}`], { [styles[`highContrast`]]: highContrast }, className);

  return (
    <code data-accent-color={color} data-radius={radius} className={classes} {...other}>
      {children}
    </code>
  );
};

const Gradient: FC<GradientProps> = ({ children, gradientColors = ['#915eff', '#9eb2ff'], style, size = 4, weight = 'normal', className, ...other }) => {
  const classes = classNames(styles[`gradient--${size}`], styles[`gradient--${weight}`], className);

  return (
    <span
      className={classes}
      style={{
        background: `linear-gradient(90deg, ${gradientColors[0]}, ${gradientColors[1]})`,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        ...style,
      }}
      {...other}
    >
      {children}
    </span>
  );
};

const Typography = {
  Header,
  Text,
  Strong,
  Code,
  Link,
  Gradient,
};

export default Typography;
