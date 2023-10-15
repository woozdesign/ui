import { RadiusProp } from '../../utils';
export interface ImageProps extends RadiusProp {
    src: string;
    alt: string;
    placeholder?: string;
    className?: string;
    width?: string | number;
    height?: string | number;
    lazyLoad?: boolean;
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    onLoad?: () => void;
    onError?: () => void;
}
