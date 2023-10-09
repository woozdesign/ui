import React from 'react';
type ToastProps = {
    message: string;
    description: string;
    duration?: number;
    placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
};
export declare const useToast: () => (React.JSX.Element | ((props: ToastProps) => void))[];
export {};
