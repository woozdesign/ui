'use client';
import { withBreakpoints } from '@/utils';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Typography.module.scss';
import { CodeProps, GradientProps, HeaderProps, LinkProps, StrongProps, TextProps } from './Typography.props';

const Header: FC<HeaderProps> = (props) => {
  const { variant = 'h2', size = '8', align = 'start', color = 'gray', weight = 'bold', highContrast = true, children, className = '', ...other } = props;

  const Tag = variant as keyof JSX.IntrinsicElements;

  const classes = classNames(
    styles[`heading--${weight}`],
    styles[`heading--${align}`],
    { [styles[`highContrast`]]: highContrast },
    className,
    withBreakpoints(size, 'wd-typography--heading', styles),
  );

  return (
    <Tag className={classes} data-accent-color={color} {...other}>
      {children}
    </Tag>
  );
};

const Text: FC<TextProps> = (props) => {
  const { children, size = '4', color = 'gray', align = 'start', weight = 'normal', variant = 'span', highContrast = true, className, ...other } = props;

  const classes = classNames(
    styles[`text--${weight}`],
    styles[`text--${align}`],
    { [styles[`highContrast`]]: highContrast },
    className,
    withBreakpoints(size, 'wd-typography--text', styles),
  );
  const Tag = variant as keyof JSX.IntrinsicElements;

  return (
    <Tag className={classes} data-accent-color={color} {...other}>
      {children}
    </Tag>
  );
};

const Strong: FC<StrongProps> = (props) => {
  const { children, ...other } = props;

  return <strong>{children}</strong>;
};

const Link: FC<LinkProps> = (props) => {
  const { children, href, color, size = '4', highContrast = false, onClick, className, target, ...other } = props;

  const classes = classNames({ [styles[`highContrast`]]: highContrast }, className, withBreakpoints(size, 'wd-typography--link', styles));

  return (
    <a href={href} target={target} onClick={onClick} data-accent-color={color} className={classes} {...other}>
      {children}
    </a>
  );
};

const Code: FC<CodeProps> = (props) => {
  const { children, color, size = '4', radius, highContrast = false, className, ...other } = props;

  const classes = classNames({ [styles[`highContrast`]]: highContrast }, className, withBreakpoints(size, 'wd-typography--code', styles));

  return (
    <code data-accent-color={color} data-radius={radius} className={classes} {...other}>
      {children}
    </code>
  );
};

const Gradient: FC<GradientProps> = (props) => {
  const { children, gradientColors = ['#915eff', '#9eb2ff'], style, size = '4', weight = 'normal', className, ...other } = props;

  const classes = classNames(styles[`gradient--${weight}`], className, withBreakpoints(size, 'wd-typography--gradient', styles));

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
