import React, { FC } from 'react';
type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
type AnchorClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => void;
interface BaseProps {
    type?: 'primary' | 'outlined' | 'secondary' | 'text' | 'icon';
    buttonType?: 'button' | 'submit' | 'reset';
    size?: 'xlarge' | 'large' | 'medium' | 'small';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning';
    block?: boolean;
    disabled?: boolean;
    shape?: 'round' | 'rect';
    iconPrepend?: JSX.Element;
    iconAppend?: JSX.Element;
    children?: React.ReactNode;
}
interface ButtonSpecificProps extends BaseProps, Omit<React.HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'color' | 'shape' | 'size' | 'type'> {
    onClick?: ButtonClickHandler;
}
interface AnchorSpecificProps extends BaseProps, Omit<React.HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'color' | 'shape' | 'size' | 'type'> {
    href: string;
    onClick?: AnchorClickHandler;
}
export type ButtonProps = ButtonSpecificProps | AnchorSpecificProps;
declare const Button: FC<ButtonProps>;
export default Button;
