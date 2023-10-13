import React, { CSSProperties, FC, ReactNode } from 'react';
import { SizeProp, TextSizeProp } from '../../utils/helper/props';
export interface CardProps extends SizeProp, Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
    variant?: 'solid' | 'transparent' | 'translucent';
    outlined?: boolean;
    children: ReactNode;
}
declare const Card: FC<CardProps> & {
    Heading: FC<HeadingProps>;
    Body: FC<BodyProps>;
    Actions: FC<ActionsProps>;
};
export interface HeadingProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title' | 'action'> {
    title: ReactNode;
    subtitle?: ReactNode;
    titleSize?: TextSizeProp['size'];
    subtitleSize?: TextSizeProp['size'];
    action?: ReactNode;
    outlined?: boolean;
}
export interface BodyProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title' | 'content'> {
    title?: ReactNode;
    titleSize?: TextSizeProp['size'];
    content: ReactNode;
    textAlign?: 'start' | 'center' | 'end';
}
export interface ActionsProps extends React.HTMLProps<HTMLDivElement> {
    justify?: CSSProperties['justifyContent'];
    outlined?: boolean;
    children: ReactNode;
}
export default Card;
