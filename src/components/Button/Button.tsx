/* eslint-disable react/display-name */
'use client';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';
import classNames from 'classnames';
import React, { FC, forwardRef } from 'react';
import styles from './Button.module.scss';
import { AnchorClickHandler, ButtonClickHandler, ButtonProps } from './Button.props';

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const {
    variant = 'solid',
    size = 'medium',
    color,
    disabled = false,
    block = false,
    highContrast = false,
    radius,
    buttonType = 'button',
    justify = 'center',
    iconPrepend,
    iconAppend,
    children,
    onClick,
    href,
    className,
    style,
    shadow,
    borderWidth,
    ...other
  } = marginOthers;

  const classes = classNames(
    className,
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${justify}`],
    {
      [styles[`button--disabled`]]: disabled,
      [styles['button--block']]: block,
      [styles['highContrast']]: highContrast,
    },
    withBreakpoints(size, 'wd-button', styles),
    withMarginProps(marginProps),
  );

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) (onClick as AnchorClickHandler)(e);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) (onClick as ButtonClickHandler)(e);
  };

  if (href) {
    return (
      <a
        {...other}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        data-shadow={shadow}
        data-radius={radius}
        data-accent-color={color}
        data-border-width={borderWidth}
        href={href}
        onClick={handleAnchorClick}
        style={style}
      >
        {iconPrepend && <span className={styles['icon-prepend']}>{iconPrepend}</span>}
        {children}
        {iconAppend && <span className={styles['icon-append']}>{iconAppend}</span>}
      </a>
    );
  }

  return (
    <button
      {...other}
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      data-shadow={shadow}
      data-radius={radius}
      data-accent-color={color}
      data-border-width={borderWidth}
      disabled={disabled}
      onClick={handleButtonClick}
      type={buttonType}
      style={style}
    >
      {iconPrepend && <span className={styles['icon-prepend']}>{iconPrepend}</span>}
      {children}
      {iconAppend && <span className={styles['icon-append']}>{iconAppend}</span>}
    </button>
  );
});

export default Button;
