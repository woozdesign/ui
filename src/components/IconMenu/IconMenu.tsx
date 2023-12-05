/* eslint-disable react/display-name */

'use client';
import React, { FC, forwardRef, useContext, useState } from 'react';

import classNames from 'classnames';
import styles from './IconMenu.module.scss';
import { IconMenuContextProps, MenuItemProps, MenuProps } from './IconMenu.props';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';
import Tooltip from '../Tooltip';

const IconMenuContext = React.createContext<IconMenuContextProps | undefined>(undefined);

const Root: FC<MenuProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { items, children, defaultValue, highContrast = false, color, radius, size = 'medium', justify = 'start' } = otherMarginProps;

  const classes = classNames(styles[`icon-menu`], styles[`icon-menu--vertical`], styles[`icon-menu--${justify}`], withMarginProps(marginProps));

  const [activeItem, setActiveItem] = useState<string>(defaultValue);

  return (
    <IconMenuContext.Provider value={{ activeItem, setActiveItem }}>
      <ul data-accent-color={color} data-radius={radius} className={classes}>
        {items ? items.map((item, index) => <Item key={index} {...item} highContrast={highContrast} size={size} />) : children}
      </ul>
    </IconMenuContext.Provider>
  );
};

const Item = forwardRef<HTMLAnchorElement, MenuItemProps>((props, ref) => {
  const { value, label, onClick, href, color, radius, size = 'medium', highContrast = false, tooltipLabel, tooltipPlacement = 'right' } = props;

  const context = useContext(IconMenuContext);
  if (!context) throw new Error('MenuItem must be used within Menu');

  const { activeItem, setActiveItem } = context;

  // Determine if the current item is active
  const isActive = activeItem === value;

  // Maybe some special styles or classes for active state
  const itemClasses = classNames(
    styles[`icon-menu--item`],
    withBreakpoints(size, 'wd-icon-menu--item', styles),
    { [styles.active]: isActive },
    { [styles[`highContrast`]]: highContrast },
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    value && setActiveItem(value);
  };

  return (
    <li>
      {tooltipLabel ? (
        <Tooltip label={tooltipLabel} placement={tooltipPlacement}>
          <a ref={ref} data-accent-color={color} data-radius={radius} href={href} onClick={handleClick} className={itemClasses}>
            <span className={styles.label}>{label}</span>
          </a>
        </Tooltip>
      ) : (
        <a ref={ref} data-accent-color={color} data-radius={radius} href={href} onClick={handleClick} className={itemClasses}>
          <span className={styles.label}>{label}</span>
        </a>
      )}
    </li>
  );
});

const IconMenu = {
  Root: Root,
  Item: Item,
};

export default IconMenu;
