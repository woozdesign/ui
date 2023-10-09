import React from 'react';
type NotificationProps = {
    message: string;
    description: string;
    duration?: number;
    placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
};
export declare const useNotification: () => readonly [(props: NotificationProps) => void, React.JSX.Element];
export {};
