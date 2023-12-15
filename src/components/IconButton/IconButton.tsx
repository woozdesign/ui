/* eslint-disable react/display-name */

'use client';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';
import classNames from 'classnames';
import React, { FC, forwardRef } from 'react';
import styles from './IconButton.module.scss';
import { AnchorClickHandler, ButtonClickHandler, IconButtonProps } from './IconButton.props';

const IconButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, IconButtonProps>((props, ref) => {
  const { others: marginOtherProps, ...marginProps } = extractMarginProps(props);
  const {
    className,
    style,
    children,
    variant = 'solid',
    size = 'medium',
    color,
    disabled = false,
    highContrast = false,
    radius,
    borderWidth,
    buttonType = 'button',
    onClick,
    href,
    ...other
  } = marginOtherProps;

  const classes = classNames(
    className,
    styles.button,
    styles[`button--${variant}`],
    {
      [styles[`button--disabled`]]: disabled,
      [styles['highContrast']]: highContrast,
    },
    withBreakpoints(size, 'wd-iconbutton', styles),
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
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        data-radius={radius}
        data-accent-color={color}
        data-border-width={borderWidth}
        href={href}
        onClick={handleAnchorClick}
        {...other}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      data-radius={radius}
      data-accent-color={color}
      data-border-width={borderWidth}
      disabled={disabled}
      onClick={handleButtonClick}
      type={buttonType}
      {...other}
      style={style}
    >
      {children}
    </button>
  );
});

export default IconButton;
