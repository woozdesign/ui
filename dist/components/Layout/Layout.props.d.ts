import { SpaceSizeProp } from '../../utils';
import React from 'react';
export interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    padding?: React.CSSProperties['padding'];
    maxWidth?: React.CSSProperties['maxWidth'];
}
export interface SectionProps extends SpaceSizeProp {
    children: React.ReactNode;
    className?: string;
    padding?: React.CSSProperties['padding'];
    style?: React.CSSProperties;
}
