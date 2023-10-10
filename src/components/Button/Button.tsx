'use client';
import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { AnchorClickHandler, ButtonClickHandler, ButtonProps } from './Button.props';

const Button: FC<ButtonProps> = ({
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
  ...other
}) => {
  const classNameList = classNames(other.className, styles.button, styles[`button--${size}`], styles[`button--${variant}`], styles[`button--${justify}`], {
    [styles[`button--disabled`]]: disabled,
    [styles['button--block']]: block,
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
        {iconPrepend && <span className={styles['icon-prepend']}>{iconPrepend}</span>}
        {children}
        {iconAppend && <span className={styles['icon-append']}>{iconAppend}</span>}
      </a>
    );
  }

  return (
    <button className={classNameList} data-radius={radius} data-accent-color={color} disabled={disabled} onClick={handleButtonClick} type={buttonType} {...other}>
      {iconPrepend && <span className={styles['icon-prepend']}>{iconPrepend}</span>}
      {children}
      {iconAppend && <span className={styles['icon-append']}>{iconAppend}</span>}
    </button>
  );
};

export default Button;
