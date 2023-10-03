'use client';
import React, { FC } from 'react';

import styles from './Menu.module.scss';
import Button from '../Button';
import { combineClassNames } from '@/utils';

interface MenuItem {
  label: string;
  onClick?: () => void;
  href?: string;
  iconPrepend?: React.ReactNode;
  iconAppend?: React.ReactNode;
  // ... other ButtonProps you might want to pass
}

interface MenuProps {
  items: MenuItem[];
  highContrast?: boolean;
  orientation?: 'vertical' | 'horizontal';
  justify?: 'start' | 'center' | 'end';
}

const Menu: FC<MenuProps> = ({ items, highContrast = true, orientation = 'vertical', justify = orientation == 'vertical' ? 'start' : 'center' }) => {
  const classes = [styles.menu, styles[`menu--${orientation}`]];
  return (
    <div className={combineClassNames(classes)}>
      {items.map((item, index) => (
        <Button
          key={index}
          variant={'text'}
          highContrast
          onClick={item.onClick}
          href={item.href}
          iconPrepend={item.iconPrepend}
          iconAppend={item.iconAppend}
          block
          justify={justify}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default Menu;
