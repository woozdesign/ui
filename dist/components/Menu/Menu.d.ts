import React, { FC } from 'react';
export interface MenuItem {
    label: string;
    onClick?: () => void;
    href?: string;
    iconPrepend?: React.ReactNode;
    iconAppend?: React.ReactNode;
}
export interface MenuProps {
    items: MenuItem[];
    highContrast?: boolean;
    orientation?: 'vertical' | 'horizontal';
    justify?: 'start' | 'center' | 'end';
}
declare const Menu: FC<MenuProps>;
export default Menu;
