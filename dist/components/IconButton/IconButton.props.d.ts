/// <reference types="react" />
import { BasePropWithChildren, BorderWidthProp, ColorProp, HighContrastProp, MarginProp, RadiusProp, SizeProp } from '../../utils';
export type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
export type AnchorClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => void;
export interface BaseProps extends BasePropWithChildren, MarginProp, ColorProp, SizeProp, RadiusProp, HighContrastProp, BorderWidthProp {
    variant?: 'solid' | 'outlined' | 'ghost' | 'transparent' | 'translucent';
    buttonType?: 'button' | 'reset' | 'submit';
    disabled?: boolean;
    href?: string;
}
export interface ButtonSpecificProps extends BaseProps, Omit<React.HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'className' | 'style' | 'children' | 'color' | 'shape' | 'size' | 'type'> {
    onClick?: ButtonClickHandler;
}
export interface AnchorSpecificProps extends BaseProps, Omit<React.HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'className' | 'style' | 'children' | 'color' | 'shape' | 'size' | 'type'> {
    href?: string;
    onClick?: AnchorClickHandler;
}
export type IconButtonProps = ButtonSpecificProps | AnchorSpecificProps;
