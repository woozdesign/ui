'use client';
import React, { FC, useContext, useState } from 'react';

import styles from './Menu.module.scss';
import Button from '../Button';
import { ColorProp, RadiusProp, SizeProp, combineClassNames } from '@/utils';
import { Icon } from '@woozdesign/icons';
import Typography from '../Typography';

interface MenuContextProps {
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

const MenuContext = React.createContext<MenuContextProps | undefined>(undefined);

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

const Menu: FC<MenuProps> = ({ items, defaultValue, highContrast = false, color, radius, size = 'medium', justify = 'start' }) => {
  const [activeItem, setActiveItem] = useState<string>(defaultValue);

  const classes = [styles.menu, styles[`menu--vertical`], styles[`menu--${justify}`]];

  return (
    <MenuContext.Provider value={{ activeItem, setActiveItem }}>
      <ul data-accent-color={color} data-radius={radius} className={combineClassNames(classes)}>
        {items.map((item, index) => (
          <MenuItemComponent key={index} {...item} highContrast={highContrast} size={size} />
        ))}
      </ul>
    </MenuContext.Provider>
  );
};

const MenuItemComponent: FC<MenuItemProps> = ({ value, label, onClick, href, iconPrepend, iconAppend, color, radius, size = 'medium', highContrast = false }) => {
  const context = useContext(MenuContext);
  if (!context) throw new Error('MenuItem must be used within Menu');

  const { activeItem, setActiveItem } = context;

  // Determine if the current item is active
  const isActive = activeItem === value;

  // Maybe some special styles or classes for active state
  const itemClasses = [styles[`menu--item`], styles[`menu--item--${size}`], isActive ? styles.active : '', highContrast ? styles[`high-contrast`] : ''];

  if (value)
    return (
      <li>
        <a
          data-accent-color={color}
          data-radius={radius}
          href={href}
          onClick={() => {
            if (onClick) onClick();
            setActiveItem(value);
          }}
          className={combineClassNames(itemClasses)}
        >
          <span className={styles.iconPrepend}>{iconPrepend}</span>
          {label}
          <span className={styles.iconAppend}>{iconAppend}</span>
        </a>
      </li>
    );

  const labelClasses = [styles[`menu--label`], styles[`menu--label--${size}`], highContrast ? styles[`high-contrast`] : ''];

  return <div className={combineClassNames(labelClasses)}>{label}</div>;
};

export default Menu;
