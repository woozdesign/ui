'use client';
/* eslint-disable react/display-name */
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './AppBar.module.scss';
import { ActionProps, AppBarProps, BodyProps, HeadingProps } from './Appbar.props';

const AppBar: FC<AppBarProps> & {
  Heading: FC<HeadingProps>;
  Body: FC<BodyProps>;
  Action: FC<ActionProps>;
} = ({ children, variant = 'solid', position = 'fixed' }) => {
  const header = classNames(styles[`header`], styles[`header--${position}`]);
  const wrapper = classNames(styles[`wrapper`], styles[`wrapper--${variant}`]);
  return (
    <header className={header}>
      <div className={wrapper}>{children}</div>
    </header>
  );
};
AppBar.Heading = ({ children, className, style }: HeadingProps): React.ReactNode => {
  return (
    <div className={classNames(styles.heading, className)} style={style}>
      {children}
    </div>
  );
};

AppBar.Body = ({ children, style, className }: BodyProps): React.ReactNode => {
  return (
    <div className={classNames(styles.body, className)} style={style}>
      {children}
    </div>
  );
};

AppBar.Action = ({ children, style, className, mobile }: ActionProps): React.ReactNode => {
  const classes = classNames(styles.action, className, { [styles[`action--mobile`]]: mobile });
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default AppBar;
