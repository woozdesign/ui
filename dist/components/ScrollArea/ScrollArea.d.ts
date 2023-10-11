import { ColorProp, RadiusProp } from '../../utils';
import React from 'react';
interface ScrollAreaProps extends RadiusProp, ColorProp {
    type?: 'always' | 'auto';
    scrollbars?: 'vertical' | 'horizontal';
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
declare const ScrollArea: React.FC<ScrollAreaProps>;
export default ScrollArea;
