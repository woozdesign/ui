/// <reference types="react" />
import { BorderWidthProp, MarginProp, RadiusProp, ShadowProp, SizeProp, TextSizeProp } from '../../utils';
export interface CardProps extends MarginProp, RadiusProp, SizeProp, ShadowProp, BorderWidthProp, Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
    variant?: 'solid' | 'transparent' | 'translucent';
    outlined?: boolean;
    children: React.ReactNode;
}
export interface HeaderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title' | 'action'> {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    titleSize?: TextSizeProp['size'];
    subtitleSize?: TextSizeProp['size'];
    action?: React.ReactNode;
    outlined?: boolean;
}
export interface BodyProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title' | 'content'> {
    title?: React.ReactNode;
    titleSize?: TextSizeProp['size'];
    content: React.ReactNode;
    textAlign?: 'start' | 'center' | 'end';
}
export interface ActionProps extends React.HTMLProps<HTMLDivElement> {
    justify?: React.CSSProperties['justifyContent'];
    outlined?: boolean;
    children: React.ReactNode;
}
