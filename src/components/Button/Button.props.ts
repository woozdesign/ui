import { BasePropWithChildren, BorderWidthProp, ColorProp, HighContrastProp, MarginProp, RadiusProp, ShadowProp, SizeProp } from '@/utils';

export type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
export type AnchorClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => void;
export interface ButtonBaseProp extends BasePropWithChildren, MarginProp, ColorProp, SizeProp, RadiusProp, HighContrastProp, ShadowProp, BorderWidthProp {
  variant?: 'solid' | 'outlined' | 'ghost' | 'transparent' | 'translucent';
  buttonType?: 'button' | 'reset' | 'submit';
  justify?: 'start' | 'center' | 'end';
  block?: boolean;
  disabled?: boolean;
  iconPrepend?: React.ReactNode;
  iconAppend?: React.ReactNode;
}

export interface ButtonSpecificProps
  extends ButtonBaseProp,
    Omit<React.HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'className' | 'style' | 'children' | 'color' | 'shape' | 'size' | 'type'> {
  onClick?: ButtonClickHandler;
}

export interface AnchorSpecificProps
  extends ButtonBaseProp,
    Omit<React.HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'className' | 'style' | 'children' | 'color' | 'shape' | 'size' | 'type'> {
  href?: string;
  onClick?: AnchorClickHandler;
}

export type ButtonProps = ButtonSpecificProps | AnchorSpecificProps;
