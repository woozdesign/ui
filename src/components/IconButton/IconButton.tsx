'use client';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './IconButton.module.scss';
import { AnchorClickHandler, ButtonClickHandler, IconButtonProps } from './IconButton.props';

const IconButton: FC<IconButtonProps> = ({
  variant = 'solid',
  size = 'medium',
  color,
  disabled = false,
  highContrast = false,
  radius,
  buttonType = 'button',
  children,
  onClick,
  href,
  ...other
}) => {
  const classNameList = classNames(other.className, styles.button, styles[`button--${size}`], styles[`button--${variant}`], {
    [styles[`button--disabled`]]: disabled,
    [styles['button--high-contrast']]: highContrast,
  });

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) (onClick as AnchorClickHandler)(e);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) (onClick as ButtonClickHandler)(e);
  };

  if (href) {
    return (
      <a className={classNameList} data-radius={radius} data-accent-color={color} href={href} onClick={handleAnchorClick} {...other}>
        {children}
      </a>
    );
  }

  return (
    <button className={classNameList} data-radius={radius} data-accent-color={color} disabled={disabled} onClick={handleButtonClick} type={buttonType} {...other}>
      {children}
    </button>
  );
};

export default IconButton;
