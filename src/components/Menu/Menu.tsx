'use client';
import React, { FC, useContext, useState } from 'react';

import classNames from 'classnames';
import styles from './Menu.module.scss';
import { MenuContextProps, MenuItemProps, MenuProps } from './Menu.props';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';

const MenuContext = React.createContext<MenuContextProps | undefined>(undefined);

const Menu: FC<MenuProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { items, defaultValue, highContrast = false, color, radius, size = 'medium', justify = 'start' } = otherMarginProps;

  const classes = classNames(styles.menu, styles[`menu--vertical`], styles[`menu--${justify}`], withMarginProps(marginProps));

  const [activeItem, setActiveItem] = useState<string>(defaultValue);

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

const MenuItemComponent: FC<MenuItemProps> = (props) => {
  const { value, label, onClick, href, iconPrepend, iconAppend, color, radius, size = 'medium', highContrast = false } = props;

  const context = useContext(MenuContext);
  if (!context) throw new Error('MenuItem must be used within Menu');

  const { activeItem, setActiveItem } = context;

  // Determine if the current item is active
  const isActive = activeItem === value;

  // Maybe some special styles or classes for active state
  const itemClasses = classNames(styles[`menu--item`], withBreakpoints(size, 'wd-menu--item', styles), { [styles.active]: isActive }, { [styles[`highContrast`]]: highContrast });

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

  const labelClasses = classNames(styles[`menu--label`], withBreakpoints(size, 'wd-menu--lable', styles), { [styles[`highContrast`]]: highContrast });

  return <div className={labelClasses}>{label}</div>;
};

export default Menu;
