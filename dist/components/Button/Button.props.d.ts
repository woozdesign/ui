/// <reference types="react" />
import { ColorProp, SizeProp } from '../../utils';
export type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
export type AnchorClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => void;
export interface BaseProps extends ColorProp, SizeProp {
    variant?: 'primary' | 'outlined' | 'secondary';
    buttonType?: 'button' | 'reset' | 'submit';
    block?: boolean;
    disabled?: boolean;
    highContrast?: boolean;
    shape?: 'round' | 'rect';
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
