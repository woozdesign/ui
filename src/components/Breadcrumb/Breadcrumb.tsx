'use client';
import { ColorProp, HighContrastProp } from '@/utils';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Breadcrumb.module.scss';
import { BreadcrumbProps } from './Breadcrumb.props';

const Breadcrumb: FC<BreadcrumbProps> = ({ items, variant = 'normal', divider = '/', color = 'gray', highContrast = true }) => {
  const classes = classNames(styles.wrapper);

  return (
    <div data-accent-color={color} className={classes}>
      {items.map((item, index) => {
        const itemClasses = classNames(styles.item, styles[`item--${variant}`], { [styles[`active`]]: item.active }, { [styles[`highContrast`]]: highContrast });

        const dividerClasses = classNames(styles.divider, { [styles[`highContrast`]]: highContrast });

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
