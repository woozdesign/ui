import React from 'react';
import { MenuItemProps, MenuProps } from './Menu.props';
declare const Menu: {
    Root: React.FC<MenuProps>;
    Item: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLAnchorElement>>;
};
export default Menu;
