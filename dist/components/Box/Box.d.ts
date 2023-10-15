import React, { FC } from 'react';
interface BoxProps {
    margin?: React.CSSProperties['margin'];
    padding?: React.CSSProperties['padding'];
    width?: React.CSSProperties['width'];
    height?: React.CSSProperties['height'];
    backgroundColor?: React.CSSProperties['backgroundColor'];
    color?: React.CSSProperties['color'];
    borderRadius?: React.CSSProperties['borderRadius'];
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}
declare const Box: FC<BoxProps>;
export default Box;
