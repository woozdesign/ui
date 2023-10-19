'use client';
import classNames from 'classnames';
import React from 'react';
import styles from './Layout.module.scss';
import { ContainerProps, SectionProps } from './Layout.props';

export const Container: React.FC<ContainerProps> = ({ children, padding, maxWidth, ...others }) => {
  const classes = classNames(styles.container, others.className);
  const combinedStyles = { ...others.style, ...{ maxWidth: maxWidth, padding: padding } };
  return (
    <div {...others} className={classes} style={combinedStyles}>
      {children}
    </div>
  );
};
export const Section: React.FC<SectionProps> = ({ children, space = 0, style, padding, ...others }) => {
  const classes = classNames(styles[`section--${space}`], others.className);
  const combinedStyles = { ...style, ...{ padding: padding } };
  return (
    <section {...others} className={classes} style={combinedStyles}>
      {children}
    </section>
  );
};

const Layout = {
  Container,
  Section,
};

export default Layout;
