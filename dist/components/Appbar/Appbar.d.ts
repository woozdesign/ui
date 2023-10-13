import React, { FC, ReactNode } from 'react';
interface AppBarProps {
    variant?: 'solid' | 'transparent' | 'translucent';
    position?: 'block' | 'absolute' | 'fixed';
    children: ReactNode;
}
declare const AppBar: FC<AppBarProps> & {
    Heading: FC<HeadingProps>;
    Body: FC<BodyProps>;
    Action: FC<ActionProps>;
};
interface HeadingProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
interface BodyProps {
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
interface ActionProps {
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    mobile?: boolean;
}
export default AppBar;
