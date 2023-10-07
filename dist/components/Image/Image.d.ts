import React from 'react';
import { RadiusProp } from '../../utils';
export interface ImageProps extends RadiusProp {
    src: string;
    alt: string;
    placeholder?: string;
    className?: string;
    width?: string | number;
    height?: string | number;
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}
declare const Image: React.FC<ImageProps>;
export default Image;
