import { ColorProp, HighContrastProp, RadiusProp, SizeProp } from '@/utils';

export type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
export type AnchorClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => void;
export interface BaseProps extends ColorProp, SizeProp, RadiusProp, HighContrastProp {
  variant?: 'solid' | 'outlined' | 'ghost' | 'text';
  buttonType?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
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

export type IconButtonProps = ButtonSpecificProps | AnchorSpecificProps;
