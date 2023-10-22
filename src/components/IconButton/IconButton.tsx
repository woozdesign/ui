'use client';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './IconButton.module.scss';
import { AnchorClickHandler, ButtonClickHandler, IconButtonProps } from './IconButton.props';

const IconButton: FC<IconButtonProps> = (props) => {
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
      <a className={classes} data-radius={radius} data-accent-color={color} href={href} onClick={handleAnchorClick} {...other}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} data-radius={radius} data-accent-color={color} disabled={disabled} onClick={handleButtonClick} type={buttonType} {...other}>
      {children}
    </button>
  );
};

export default IconButton;
