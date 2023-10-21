import { BasePropWithChildren, ColorProp, HighContrastProp, MarginProp, RadiusProp, SizeProp } from '@/utils';

export type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
export type AnchorClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => void;
export interface ButtonBaseProp extends BasePropWithChildren, MarginProp, ColorProp, SizeProp, RadiusProp, HighContrastProp {
  variant?: 'solid' | 'outlined' | 'ghost' | 'transparent' | 'translucent';
  buttonType?: 'button' | 'reset' | 'submit';
  justify?: 'start' | 'center' | 'end';
  block?: boolean;
  disabled?: boolean;
  iconPrepend?: React.ReactNode;
  iconAppend?: React.ReactNode;

  href?: string;
}

export interface ButtonSpecificProps extends ButtonBaseProp, Omit<React.HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'color' | 'shape' | 'size' | 'type'> {
  onClick?: ButtonClickHandler;
}

export interface AnchorSpecificProps extends ButtonBaseProp, Omit<React.HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'color' | 'shape' | 'size' | 'type'> {
  href?: string;
  onClick?: AnchorClickHandler;
}

export type ButtonProps = ButtonSpecificProps | AnchorSpecificProps;
