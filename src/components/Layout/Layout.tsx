/* eslint-disable react/display-name */
import React, { FC } from 'react';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';
import classNames from 'classnames';

const Layout: FC<LayoutProps> & {
  Header: FC<LayoutProps>;
  Sider: FC<LayoutProps>;
  Content: FC<LayoutProps>;
  Footer: FC<LayoutProps>;
} = (props) => {
  const { className, style, children } = props;
  const classes = classNames(styles.layout, className);

  return (
    <div style={style} className={classes}>
      {children}
    </div>
  );
};

Layout.Header = (props: LayoutProps) => {
  const { className, style, children } = props;
  const classes = classNames(styles.layout__header, className);

  return (
    <header style={style} className={classes}>
      {children}
    </header>
  );
};

Layout.Sider = (props: LayoutProps) => {
  const { className, style, children } = props;
  const classes = classNames(styles.layout__sider, className);
  return (
    <aside style={style} className={classes}>
      {children}
    </aside>
  );
};

Layout.Content = (props: LayoutProps) => {
  const { className, style, children } = props;
  const classes = classNames(styles.layout__content, className);

  return (
    <main style={style} className={classes}>
      {children}
    </main>
  );
};

Layout.Footer = (props: LayoutProps) => {
  const { className, style, children } = props;
  const classes = classNames(styles.layout__footer, className);
  return (
    <footer style={style} className={classes}>
      {children}
    </footer>
  );
};

export default Layout;
