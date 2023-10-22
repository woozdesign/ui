import React from 'react';
import { ToastProps } from './Toast.props';
type ToastFunction = (props: Omit<ToastProps, 'id'>) => void;
type ToastHookReturnValue = [ToastFunction, React.ReactNode];
export declare const useToast: () => ToastHookReturnValue;
export {};
