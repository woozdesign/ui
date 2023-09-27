import { FC } from 'react';
import { ButtonSpecificProps, AnchorSpecificProps } from './Button.props';
export type ButtonProps = ButtonSpecificProps | AnchorSpecificProps;
declare const Button: FC<ButtonProps>;
export default Button;
