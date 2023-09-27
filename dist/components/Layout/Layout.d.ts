import React from 'react';
interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const Container: React.FC<ContainerProps>;
interface RowProps extends React.HTMLProps<HTMLDivElement> {
    gutter?: [number, number];
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'around' | 'space-evenly';
    children: React.ReactNode;
}
export declare const Row: React.FC<RowProps>;
interface ColProps extends React.HTMLProps<HTMLDivElement> {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    children: React.ReactNode;
}
export declare const Col: React.FC<ColProps>;
declare const Layout: {
    Container: React.FC<ContainerProps>;
    Row: React.FC<RowProps>;
    Col: React.FC<ColProps>;
};
export default Layout;
