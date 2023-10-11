'use client';
import React, { FC, useContext, useState } from 'react';

import { ColorProp, HighContrastProp, RadiusProp, SizeProp } from '@/utils';
import classNames from 'classnames';
import styles from './Menu.module.scss';

interface MenuContextProps {
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

const MenuContext = React.createContext<MenuContextProps | undefined>(undefined);

export interface MenuItem extends SizeProp, ColorProp, RadiusProp, HighContrastProp {
  label: string;
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

const Menu: FC<MenuProps> = ({ items, defaultValue, highContrast = false, color, radius, size = 'medium', justify = 'start' }) => {
  const [activeItem, setActiveItem] = useState<string>(defaultValue);

  const classes = classNames(styles.menu, styles[`menu--vertical`], styles[`menu--${justify}`]);

  return (
    <MenuContext.Provider value={{ activeItem, setActiveItem }}>
      <ul data-accent-color={color} data-radius={radius} className={classes}>
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
  const itemClasses = classNames(styles[`menu--item`], styles[`menu--item--${size}`], { [styles.active]: isActive }, { [styles[`high-contrast`]]: highContrast });

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
          className={itemClasses}
        >
          <span className={styles.iconPrepend}>{iconPrepend}</span>
          {label}
          <span className={styles.iconAppend}>{iconAppend}</span>
        </a>
      </li>
    );

  const labelClasses = classNames(styles[`menu--label`], styles[`menu--label--${size}`], { [styles[`high-contrast`]]: highContrast });

  return <div className={labelClasses}>{label}</div>;
};

export default Menu;
