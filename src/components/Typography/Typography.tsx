'use client';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Typography.module.scss';
import { CodeProps, GradientProps, HeaderProps, LinkProps, StrongProps, TextProps } from './Typography.props';
import { DEFAULT_FONT_SIZE } from '@/utils/helper/defaultValues';

const Header: FC<HeaderProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { variant = 'h2', size = '8', align = 'start', color = 'gray', weight = 'bold', highContrast = true, children, className = '', ...other } = otherMarginProps;

  const Tag = variant as keyof JSX.IntrinsicElements;

  const classes = classNames(
    styles[`heading--${weight}`],
    styles[`heading--${align}`],
    { [styles[`highContrast`]]: highContrast },
    className,
    withMarginProps(marginProps),
    withBreakpoints(size, 'wd-typography--heading', styles),
  );

  return (
    <Tag className={classes} data-accent-color={color} {...other}>
      {children}
    </Tag>
  );
};

const Text: FC<TextProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { children, size = DEFAULT_FONT_SIZE, color = 'gray', align = 'start', weight = 'normal', variant = 'span', highContrast = true, className, ...other } = otherMarginProps;

  const classes = classNames(
    styles[`text--${weight}`],
    styles[`text--${align}`],
    { [styles[`highContrast`]]: highContrast },
    className,
    withMarginProps(marginProps),
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
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { children, href, color, size = DEFAULT_FONT_SIZE, highContrast = false, onClick, className, target, ...other } = otherMarginProps;

  const classes = classNames({ [styles[`highContrast`]]: highContrast }, className, withMarginProps(marginProps), withBreakpoints(size, 'wd-typography--link', styles));

  return (
    <a href={href} target={target} onClick={onClick} data-accent-color={color} className={classes} {...other}>
      {children}
    </a>
  );
};

const Code: FC<CodeProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { children, color, size = DEFAULT_FONT_SIZE, radius, highContrast = false, className, ...other } = otherMarginProps;

  const classes = classNames({ [styles[`highContrast`]]: highContrast }, className, withMarginProps(marginProps), withBreakpoints(size, 'wd-typography--code', styles));

  return (
    <code data-accent-color={color} data-radius={radius} className={classes} {...other}>
      {children}
    </code>
  );
};

const Gradient: FC<GradientProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { children, gradientColors = ['#915eff', '#9eb2ff'], style, size = DEFAULT_FONT_SIZE, weight = 'normal', className, ...other } = otherMarginProps;

  const classes = classNames(styles[`gradient--${weight}`], className, withMarginProps(marginProps), withBreakpoints(size, 'wd-typography--gradient', styles));

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
  Code,
  Link,
  Gradient,
};

export default Typography;
