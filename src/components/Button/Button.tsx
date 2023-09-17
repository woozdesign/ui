import React, { FC, MouseEvent, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import { combineClassNames } from '@/utils/helper/combineClassNames';

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type BaseAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
type AnchorClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => void;

// type OverridableType = BaseAnchorProps;
interface BaseProps {
  type?: 'primary' | 'outlined' | 'secondary' | 'text' | 'icon';
  size?: 'xlarge' | 'large' | 'medium' | 'small';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  block?: boolean;
  disabled?: boolean;
  shape?: 'round' | 'rect';
  iconPrepend?: JSX.Element;
  iconAppend?: JSX.Element;
  children?: React.ReactNode;
  // onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

interface ButtonSpecificProps extends BaseProps, Omit<React.HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'color' | 'shape' | 'size' | 'type'> {
  onClick?: ButtonClickHandler;
}

interface AnchorSpecificProps extends BaseProps, Omit<React.HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'color' | 'shape' | 'size' | 'type'> {
  href: string;
  onClick?: AnchorClickHandler;
}

type ButtonProps = ButtonSpecificProps | AnchorSpecificProps;

const Button: FC<ButtonProps> = ({
  type = 'primary',
  size = 'medium',
  color = 'default',
  disabled = false,
  block = false,
  shape = 'rect',
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
    styles[`button--${type}--color-${color}`],
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
    <button className={combineClassNames(classNameList)} disabled={disabled} onClick={handleButtonClick} {...other}>
      {iconPrepend && <span className={styles['icon-prepend']}>{iconPrepend}</span>}
      {children}
      {iconAppend && <span className={styles['icon-append']}>{iconAppend}</span>}
    </button>
  );
};

export default Button;
