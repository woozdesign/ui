'use client';

import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './AppBar.module.scss';
import { ActionProps, AppBarProps, BodyProps, HeaderProps } from './Appbar.props';

const AppBar: FC<AppBarProps> & {
  Header: FC<HeaderProps>;
  Body: FC<BodyProps>;
  Action: FC<ActionProps>;
} = (props) => {
  const { children, variant = 'solid', position = 'fixed' } = props;

  const headerClasses = classNames(styles[`header`], styles[`header--${position}`]);
  const wrapperClasses = classNames(styles[`wrapper`], styles[`wrapper--${variant}`]);

  return (
    <header className={headerClasses}>
      <div className={wrapperClasses}>{children}</div>
    </header>
  );
};

const Header: FC<HeaderProps> = (props) => {
  const { children, className, style } = props;

  const classes = classNames(styles.heading, className);

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

const Body: FC<BodyProps> = (props) => {
  const { children, style, className } = props;

  const classes = classNames(styles.body, className);

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

const Action: FC<ActionProps> = (props) => {
  const { children, style, className, mobile } = props;

  const classes = classNames(styles.action, className, { [styles[`action--mobile`]]: mobile });

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

AppBar.Header = Header;
AppBar.Body = Body;
AppBar.Action = Action;

export default AppBar;
