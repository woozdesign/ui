import React, { ReactNode } from 'react';
interface DrawerProps {
    children: ReactNode;
    width?: React.CSSProperties['width'];
    placement?: 'left' | 'right';
    variant?: 'default' | 'confirm';
    outlined?: boolean;
    overlayVariant?: 'transparent' | 'translucent';
    onClose?: () => void;
}
interface TriggerProps {
    children: ReactNode;
}
interface ContentProps {
    title?: ReactNode;
    children: ReactNode;
}
declare const Drawer: {
    Root: React.FC<DrawerProps>;
    Trigger: React.FC<TriggerProps>;
    Content: React.FC<ContentProps>;
};
export default Drawer;
