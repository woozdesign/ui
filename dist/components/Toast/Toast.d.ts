import { ColorProp, HighContrastProp, RadiusProp } from '../../utils';
import React from 'react';
interface ToastProps extends ColorProp, RadiusProp, HighContrastProp {
    id: number;
    variant?: 'solid' | 'ghost' | 'outlined' | 'translucent';
    iconPrepend?: React.ReactNode;
    message: string;
    duration?: number;
    placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}
type ToastFunction = (props: Omit<ToastProps, 'id'>) => void;
type ToastHookReturnType = [ToastFunction, JSX.Element];
export declare const useToast: () => ToastHookReturnType;
export {};
