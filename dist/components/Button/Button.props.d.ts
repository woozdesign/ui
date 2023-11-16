/// <reference types="react" />
import { BasePropWithChildren, ColorProp, HighContrastProp, MarginProp, RadiusProp, ShadowProp, SizeProp } from '../../utils';
export type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
export type AnchorClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => void;
export interface ButtonBaseProp extends BasePropWithChildren, MarginProp, ColorProp, SizeProp, RadiusProp, HighContrastProp, ShadowProp {
    variant?: 'solid' | 'outlined' | 'ghost' | 'transparent' | 'translucent';
    buttonType?: 'button' | 'reset' | 'submit';
    justify?: 'start' | 'center' | 'end';
    block?: boolean;
    disabled?: boolean;
    iconPrepend?: React.ReactNode;
    iconAppend?: React.ReactNode;
    href?: string;
}
export type ButtonSpecificProps = {
    onClick?: ButtonClickHandler;
} & ButtonBaseProp & Omit<React.HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'className' | 'style' | 'children' | 'color' | 'shape' | 'size' | 'type'>;
export type AnchorSpecificProps = {
    href?: string;
    onClick?: AnchorClickHandler;
} & ButtonBaseProp & Omit<React.HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'className' | 'style' | 'children' | 'color' | 'shape' | 'size' | 'type'>;
export type ButtonProps = ButtonSpecificProps | AnchorSpecificProps;
