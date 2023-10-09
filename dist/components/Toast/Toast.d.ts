import React from 'react';
import { ColorProp, RadiusProp } from '../../utils';
export interface ToastProps extends ColorProp, RadiusProp {
    id: number;
    iconPrepend?: React.ReactNode;
    message: string;
    duration?: number;
    placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}
type ToastFunction = (props: Omit<ToastProps, 'id'>) => void;
type ToastHookReturnType = [ToastFunction, JSX.Element];
export declare const useToast: () => ToastHookReturnType;
export {};
