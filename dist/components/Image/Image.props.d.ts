import { BaseProp, MarginProp, RadiusProp } from '../../utils';
export interface ImageProps extends BaseProp, MarginProp, RadiusProp {
    src: string;
    alt: string;
    placeholder?: string;
    width?: string | number;
    height?: string | number;
    lazyLoad?: boolean;
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    onLoad?: () => void;
    onError?: () => void;
}
