import React, { FC } from 'react';
import { ColorProp, RadiusProp, SizeProp } from '../../utils';
export interface MenuItem extends SizeProp, ColorProp, RadiusProp {
    label: string;
    onClick?: () => void;
    href?: string;
    iconPrepend?: React.ReactNode;
    iconAppend?: React.ReactNode;
    highContrast?: boolean;
}
export interface MenuItemProps extends Omit<MenuItem, 'value'> {
    value?: string;
}
export interface MenuProps extends SizeProp, ColorProp, RadiusProp {
    items: MenuItemProps[];
    defaultValue: string;
    highContrast?: boolean;
    justify?: 'start' | 'center' | 'end';
}
declare const Menu: FC<MenuProps>;
export default Menu;
