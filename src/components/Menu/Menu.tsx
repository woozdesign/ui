/* eslint-disable react/display-name */

'use client';
import React, { FC, forwardRef, useContext, useState } from 'react';

import classNames from 'classnames';
import styles from './Menu.module.scss';
import { MenuContextProps, MenuItemProps, MenuProps } from './Menu.props';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';

const MenuContext = React.createContext<MenuContextProps | undefined>(undefined);

const Root: FC<MenuProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { items, children, defaultValue, highContrast = false, color, radius, size = 'medium', justify = 'start' } = otherMarginProps;

  const classes = classNames(styles.menu, styles[`menu--vertical`], styles[`menu--${justify}`], withMarginProps(marginProps));

  const [activeItem, setActiveItem] = useState<string>(defaultValue);

  return (
    <MenuContext.Provider value={{ activeItem, setActiveItem }}>
      <ul data-accent-color={color} data-radius={radius} className={classes}>
        {items ? items.map((item, index) => <Item key={index} {...item} highContrast={highContrast} size={size} />) : children}
      </ul>
    </MenuContext.Provider>
  );
};

const Item = forwardRef<HTMLAnchorElement, MenuItemProps>((props, ref) => {
  const { value, label, onClick, href, iconPrepend, iconAppend, color, radius, size = 'medium', highContrast = false } = props;

  const context = useContext(MenuContext);
  if (!context) throw new Error('MenuItem must be used within Menu');

  const { activeItem, setActiveItem } = context;

  // Determine if the current item is active
  const isActive = activeItem === value;

  // Maybe some special styles or classes for active state
  const itemClasses = classNames(styles[`menu--item`], withBreakpoints(size, 'wd-menu--item', styles), { [styles.active]: isActive }, { [styles[`highContrast`]]: highContrast });

  const handleClick = () => {
    if (onClick) onClick();
    value && setActiveItem(value);
  };

  if (value)
    return (
      <a ref={ref} data-accent-color={color} data-radius={radius} href={href} onClick={handleClick} className={itemClasses}>
        {iconPrepend && <span className={styles.iconPrepend}>{iconPrepend}</span>}
        <span className={styles.label}>{label}</span>
        {iconAppend && <span className={styles.iconAppend}>{iconAppend}</span>}
      </a>
    );

  const labelClasses = classNames(styles[`menu--label`], withBreakpoints(size, 'wd-menu--label', styles), { [styles[`highContrast`]]: highContrast });

  return <div className={labelClasses}>{label}</div>;
});

const Menu = {
  Root: Root,
  Item: Item,
};

export default Menu;
