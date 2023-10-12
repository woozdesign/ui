import { ColorProp, RadiusProp } from '../../utils';
import React from 'react';
interface ScrollAreaProps extends RadiusProp, ColorProp {
    id: string;
    type?: 'always' | 'auto';
    scrollbars?: 'vertical' | 'horizontal';
    persistant?: boolean;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
declare const ScrollArea: React.FC<ScrollAreaProps>;
export default ScrollArea;
