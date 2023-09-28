'use client';
import { combineClassNames } from '@/utils/helper/combineClassNames';
import React, { FC } from 'react';
import styles from './Button.module.scss';
import { AnchorClickHandler, ButtonClickHandler, ButtonProps } from './Button.props';

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  color = 'purple',
  disabled = false,
  block = false,
  highContrast = false,
  shape = 'rect',
  buttonType = 'button',
  iconPrepend,
  iconAppend,
  children,
  onClick,
  href,
  ...other
}) => {
  const classNameList = [
    other.className ?? '',
    styles.button,
    styles[`button--${size}`],
    styles[`button--${variant}`],
    disabled ? styles[`button--disabled`] : '',
    block ? styles['button--block'] : '',
    highContrast ? styles['button--high-contrast'] : '',
    styles[`button--${shape}`],
  ];
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) (onClick as AnchorClickHandler)(e);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) (onClick as ButtonClickHandler)(e);
  };
  if (href) {
    return (
      <a className={combineClassNames(classNameList)} data-accent-color={color} href={href} onClick={handleAnchorClick} {...other}>
        {iconPrepend && <span className={styles['icon-prepend']}>{iconPrepend}</span>}
        {children}
        {iconAppend && <span className={styles['icon-append']}>{iconAppend}</span>}
      </a>
    );
  }

  return (
    <button className={combineClassNames(classNameList)} data-accent-color={color} disabled={disabled} onClick={handleButtonClick} type={buttonType} {...other}>
      {iconPrepend && <span className={styles['icon-prepend']}>{iconPrepend}</span>}
      {children}
      {iconAppend && <span className={styles['icon-append']}>{iconAppend}</span>}
    </button>
  );
};

export default Button;
