/// <reference types="react" />
import { BorderWidthProp, ColorProp, HighContrastProp, RadiusProp } from '../../utils';
export interface ToastProps extends ColorProp, RadiusProp, HighContrastProp, BorderWidthProp {
    id: number;
    variant?: 'solid' | 'ghost' | 'outlined' | 'translucent';
    iconPrepend?: React.ReactNode;
    message: string;
    duration?: number;
    placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}
export interface ToastDisplayProps {
    toast: ToastProps;
    handleClose: (id: number) => void;
}
