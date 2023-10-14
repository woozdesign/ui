import React from 'react';
import { ContentProps, DrawerProps, FooterProps, HeaderProps, TriggerProps } from './Drawer.props';
declare const Drawer: {
    Root: React.FC<DrawerProps>;
    Trigger: React.FC<TriggerProps>;
    Content: React.FC<ContentProps>;
    Header: React.FC<HeaderProps>;
    Footer: React.FC<FooterProps>;
};
export default Drawer;
