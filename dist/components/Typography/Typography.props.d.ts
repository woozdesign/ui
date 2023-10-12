/// <reference types="react" />
import { ColorProp, HighContrastProp, RadiusProp, TextSizeProp } from '../../utils/helper/props';
export interface TypographyProps extends TextSizeProp, HighContrastProp {
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    weight?: 'light' | 'normal' | 'bold' | 'bolder';
    align?: 'start' | 'center' | 'end';
}
export interface HeadingProps extends ColorProp, TypographyProps {
    variant?: Extract<keyof JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
}
export interface TextProps extends ColorProp, TypographyProps {
    variant?: Extract<keyof JSX.IntrinsicElements, 'p' | 'label' | 'div' | 'span'>;
}
export interface StrongProps {
    children?: React.ReactNode;
}
export interface LinkProps extends ColorProp, TypographyProps {
    href?: string;
    children?: React.ReactNode;
}
export interface CodeProps extends ColorProp, RadiusProp, TypographyProps {
    children?: React.ReactNode;
}
