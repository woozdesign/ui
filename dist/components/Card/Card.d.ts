import React, { CSSProperties, FC, ReactNode } from 'react';
import { SizeProp } from '@/utils/helper/props';
export interface CardProps extends SizeProp, Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
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
    titleLevel?: 6 | 5 | 4 | 3 | 2 | 1;
    subtitle?: ReactNode;
    action?: ReactNode;
    outlined?: boolean;
}
export interface BodyProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
    title?: ReactNode;
    titleLevel?: 6 | 5 | 4 | 3 | 2 | 1;
    description: ReactNode;
}
export interface ActionsProps extends React.HTMLProps<HTMLDivElement> {
    justify?: CSSProperties['justifyContent'];
    outlined?: boolean;
    children: ReactNode;
}
export default Card;
