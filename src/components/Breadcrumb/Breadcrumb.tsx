'use client';
import React, { FC } from 'react';
import styles from './Breadcrumb.module.scss';
import Button from '../Button';
import { ColorProp, combineClassNames } from '@/utils';

export type BreadcrumbItem = {
  key: string;
  href: string;
  title: string;
  active: boolean;
};

interface BreadcrumbProps extends ColorProp {
  items: BreadcrumbItem[];
  divider?: React.ReactNode;
  highContrast?: boolean;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items, divider = '/', color = 'gray', highContrast = true }) => {
  const classes = [styles[`wrapper`]];
  return (
    <div data-accent-color={color} className={combineClassNames(classes)}>
      {items.map((item, index) => {
        const itemClasses = [styles[`item`], item.active ? styles[`item--active`] : '', highContrast ? styles[`item--highContrast`] : ''];
        return (
          <>
            <a className={combineClassNames(itemClasses)} key={item.key} href={item.href}>
              {item.title}
            </a>
            {index < items.length - 1 && <span className={combineClassNames([styles.divider, highContrast ? styles[`divider--highContrast`] : ''])}>{divider}</span>}
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
