'use client';
import { extractDisplayProps, extractLayoutProps, extractMarginProps, extractPaddingProps, withDisplayProps, withLayoutProps, withMarginProps, withPaddingProps } from '@/utils';
import classNames from 'classnames';
import React from 'react';
import { ContainerProps } from './Container.props';
import styles from './Container.module.scss';

export const Container: React.FC<ContainerProps> = (props) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { others: paddingOthers, ...paddingProps } = extractPaddingProps(marginOthers);
  const { others: displayOthers, ...displayProps } = extractDisplayProps(paddingOthers);
  const { others: layoutOthersProps, ...layoutProps } = extractLayoutProps(displayOthers);
  const { className, style, children } = layoutOthersProps;

  const classes = classNames(
    styles.container,
    className,
    withDisplayProps(displayProps),
    withLayoutProps(layoutProps),
    withMarginProps(marginProps),
    withPaddingProps(paddingProps),
  );

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default Container;
