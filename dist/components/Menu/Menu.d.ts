import React, { FC } from 'react';
import { ColorProp, HighContrastProp, RadiusProp, SizeProp } from '../../utils';
export interface MenuItem extends SizeProp, ColorProp, RadiusProp, HighContrastProp {
    label: React.ReactNode;
    onClick?: () => void;
    href?: string;
    iconPrepend?: React.ReactNode;
    iconAppend?: React.ReactNode;
}
export interface MenuItemProps extends Omit<MenuItem, 'value'> {
    value?: string;
}
export interface MenuProps extends SizeProp, ColorProp, RadiusProp, HighContrastProp {
    items: MenuItemProps[];
    defaultValue: string;
    justify?: 'start' | 'center' | 'end';
}
declare const Menu: FC<MenuProps>;
export default Menu;
