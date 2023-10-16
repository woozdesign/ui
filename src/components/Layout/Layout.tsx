'use client';
import classNames from 'classnames';
import React from 'react';
import styles from './Layout.module.scss';
import { ColProps, ContainerProps, RowProps } from './Layout.props';

export const Container: React.FC<ContainerProps> = ({ children, ...others }) => {
  const classes = classNames(styles.container, others.className);

  const combinedStyles = { ...others.style };
  return (
    <div {...others} className={classes} style={combinedStyles}>
      {children}
    </div>
  );
};

const Layout = {
  Container,
};

export default Layout;
