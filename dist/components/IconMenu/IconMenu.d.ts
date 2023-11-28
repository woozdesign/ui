import React from 'react';
import { MenuItemProps, MenuProps } from './IconMenu.props';
declare const IconMenu: {
    Root: React.FC<MenuProps>;
    Item: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLAnchorElement>>;
};
export default IconMenu;
