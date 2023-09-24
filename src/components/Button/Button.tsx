'use client';
import { combineClassNames } from '@/utils/helper/combineClassNames';
import React, { FC } from 'react';
import styles from './Button.module.scss';
import { ButtonSpecificProps, AnchorSpecificProps, AnchorClickHandler, ButtonClickHandler } from './Button.props';

export type ButtonProps = ButtonSpecificProps | AnchorSpecificProps;

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  color = 'purple',
  disabled = false,
  block = false,
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
      <a {...other} className={combineClassNames(classNameList)} href={href} onClick={handleAnchorClick}>
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
