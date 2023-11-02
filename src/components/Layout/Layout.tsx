/* eslint-disable react/display-name */
import React, { FC } from 'react';
import styles from './Layout.module.scss';
import { LayoutComponentProps } from './Layout.props';
import classNames from 'classnames';
import { extractDisplayProps, extractLayoutProps, extractMarginProps, extractPaddingProps, withDisplayProps, withLayoutProps, withMarginProps, withPaddingProps } from '@/utils';

const Layout: FC<LayoutComponentProps> & {
  Header: FC<LayoutComponentProps>;
  Sider: FC<LayoutComponentProps>;
  Content: FC<LayoutComponentProps>;
  Footer: FC<LayoutComponentProps>;
} = (props) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { others: paddingOthers, ...paddingProps } = extractPaddingProps(marginOthers);
  const { others: layoutOthersProps, ...layoutProps } = extractLayoutProps(paddingOthers);
  const { className, style, children } = layoutOthersProps;

  const classes = classNames(styles.layout, className, withMarginProps(marginProps), withPaddingProps(paddingProps), withLayoutProps(layoutProps));

  return (
    <div style={style} className={classes}>
      {children}
    </div>
  );
};

Layout.Header = (props: LayoutComponentProps) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { others: paddingOthers, ...paddingProps } = extractPaddingProps(marginOthers);
  const { others: layoutOthersProps, ...layoutProps } = extractLayoutProps(paddingOthers);
  const { className, style, children } = layoutOthersProps;

  const classes = classNames(styles.layout__header, className, withMarginProps(marginProps), withPaddingProps(paddingProps), withLayoutProps(layoutProps));

  return (
    <header style={style} className={classes}>
      {children}
    </header>
  );
};

Layout.Sider = (props: LayoutComponentProps) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { others: paddingOthers, ...paddingProps } = extractPaddingProps(marginOthers);
  const { others: layoutOthersProps, ...layoutProps } = extractLayoutProps(paddingOthers);
  const { className, style, children } = layoutOthersProps;

  const classes = classNames(styles.layout__sider, className, withMarginProps(marginProps), withPaddingProps(paddingProps), withLayoutProps(layoutProps));
  return (
    <aside style={style} className={classes}>
      {children}
    </aside>
  );
};

Layout.Content = (props: LayoutComponentProps) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { others: paddingOthers, ...paddingProps } = extractPaddingProps(marginOthers);
  const { others: layoutOthersProps, ...layoutProps } = extractLayoutProps(paddingOthers);
  const { className, style, children } = layoutOthersProps;

  const classes = classNames(styles.layout__content, className, withMarginProps(marginProps), withPaddingProps(paddingProps), withLayoutProps(layoutProps));

  return (
    <main style={style} className={classes}>
      {children}
    </main>
  );
};

Layout.Footer = (props: LayoutComponentProps) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { others: paddingOthers, ...paddingProps } = extractPaddingProps(marginOthers);
  const { others: layoutOthersProps, ...layoutProps } = extractLayoutProps(paddingOthers);
  const { className, style, children } = layoutOthersProps;

  const classes = classNames(styles.layout__footer, className, withMarginProps(marginProps), withPaddingProps(paddingProps), withLayoutProps(layoutProps));
  return (
    <footer style={style} className={classes}>
      {children}
    </footer>
  );
};

export default Layout;
