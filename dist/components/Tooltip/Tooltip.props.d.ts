import React from 'react';
export interface TooltipProps {
    content: string;
    position?: 'top' | 'bottom';
    children: React.ReactNode;
}
