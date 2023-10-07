import React from 'react';
export interface ImageProps {
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
