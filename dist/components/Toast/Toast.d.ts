import { ColorProp, RadiusProp } from '../../utils';
import React from 'react';
interface ToastProps extends ColorProp, RadiusProp {
    id: number;
    iconPrepend?: React.ReactNode;
    message: string;
    duration?: number;
    highContrast?: boolean;
    placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}
type ToastFunction = (props: Omit<ToastProps, 'id'>) => void;
type ToastHookReturnType = [ToastFunction, JSX.Element];
export declare const useToast: () => ToastHookReturnType;
export {};
