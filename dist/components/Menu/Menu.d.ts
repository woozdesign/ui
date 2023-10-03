import React, { FC } from 'react';
interface MenuItem {
    label: string;
    onClick?: () => void;
    href?: string;
    iconPrepend?: React.ReactNode;
    iconAppend?: React.ReactNode;
}
interface MenuProps {
    items: MenuItem[];
    highContrast?: boolean;
    orientation?: 'vertical' | 'horizontal';
    justify?: 'start' | 'center' | 'end';
}
declare const Menu: FC<MenuProps>;
export default Menu;
