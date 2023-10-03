import { ColorProp, RadiusProp, SizeProp } from '@/utils';

export type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
export type AnchorClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => void;
export interface BaseProps extends ColorProp, SizeProp, RadiusProp {
  variant?: 'primary' | 'outlined' | 'secondary' | 'icon' | 'text';
  buttonType?: 'button' | 'reset' | 'submit';
  justify?: 'start' | 'center' | 'end';
  block?: boolean;
  disabled?: boolean;
  highContrast?: boolean;
  iconPrepend?: JSX.Element;
  iconAppend?: JSX.Element;
  children?: React.ReactNode;
  href?: string;
}

export interface ButtonSpecificProps extends BaseProps, Omit<React.HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'color' | 'shape' | 'size' | 'type'> {
  onClick?: ButtonClickHandler;
}

export interface AnchorSpecificProps extends BaseProps, Omit<React.HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'color' | 'shape' | 'size' | 'type'> {
  href?: string;
  onClick?: AnchorClickHandler;
}

export type ButtonProps = ButtonSpecificProps | AnchorSpecificProps;
