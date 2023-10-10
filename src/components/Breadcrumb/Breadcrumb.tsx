'use client';
import { ColorProp } from '@/utils';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Breadcrumb.module.scss';

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
  const classes = classNames(styles.wrapper);

  return (
    <div data-accent-color={color} className={classes}>
      {items.map((item, index) => {
        const itemClasses = classNames(styles.item, { [styles[`item--active`]]: item.active }, { [styles[`item--highContrast`]]: highContrast });

        const dividerClasses = classNames(styles.divider, { [styles[`divider--highContrast`]]: highContrast });

        return (
          <React.Fragment key={item.key}>
            <a className={itemClasses} href={item.href}>
              {item.title}
            </a>
            {index < items.length - 1 && <span className={dividerClasses}>{divider}</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
