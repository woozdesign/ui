import React, { FC, ReactNode } from 'react';
export interface CardProps extends React.HTMLProps<HTMLDivElement> {
    outlined?: boolean;
    backgroundColor?: string;
    children: ReactNode;
}
declare const Card: React.FC<CardProps> & {
    Title: FC<TitleProps>;
    Subtitle: FC<SubtitleProps>;
    Text: FC<TextProps>;
    Actions: FC<ActionsProps>;
    Content: FC<ContentProps>;
};
export interface TitleProps extends Omit<React.HTMLProps<HTMLDivElement>, 'type'> {
    level?: number;
    children: ReactNode;
}
export interface SubtitleProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
}
export interface TextProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
}
export interface ContentProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
}
export interface ActionsProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
}
export default Card;
