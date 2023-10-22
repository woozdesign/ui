'use client';
import classNames from 'classnames';
import React from 'react';
import { ColProps, RowProps } from './Grid.props';
import styles from './Grid.module.scss';
import { extractDisplayProps, extractLayoutProps, extractMarginProps, extractPaddingProps, withDisplayProps, withLayoutProps, withMarginProps, withPaddingProps } from '@/utils';

export const Row: React.FC<RowProps> = (props) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { others: paddingOthers, ...paddingProps } = extractPaddingProps(marginOthers);
  const { others: displayOthers, ...displayProps } = extractDisplayProps(paddingOthers);
  const { others: layoutOthersProps, ...layoutProps } = extractLayoutProps(displayOthers);
  const { className, style, children, gutter = [0, 0], align = 'start', justify = 'start' } = layoutOthersProps;

  const classes = classNames(styles.row, className, withDisplayProps(displayProps), withLayoutProps(layoutProps), withMarginProps(marginProps), withPaddingProps(paddingProps));

  const combinedStyle = {
    alignItems: align,
    justifyContent: justify,
    '--horizontal-gutter': `${gutter[0]}px`,
    '--vertical-gutter': `${gutter[1]}px`,
    ...style,
  };

  return (
    <div className={classes} style={combinedStyle}>
      {children}
    </div>
  );
};

export const Col: React.FC<ColProps> = (props) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { others: paddingOthers, ...paddingProps } = extractPaddingProps(marginOthers);
  const { others: displayOthers, ...displayProps } = extractDisplayProps(paddingOthers);
  const { others: layoutOthersProps, ...layoutProps } = extractLayoutProps(displayOthers);
  const { className, style, children, xs, sm, md, lg, xl } = layoutOthersProps;

  const classes = classNames(
    styles.col,
    className,
    {
      [styles[`xs-${xs}`]]: typeof xs == 'number',
      [styles[`sm-${sm}`]]: typeof sm == 'number',
      [styles[`md-${md}`]]: typeof md == 'number',

      [styles[`lg-${lg}`]]: typeof lg == 'number',
      [styles[`xl-${xl}`]]: typeof xl == 'number',
    },
    withDisplayProps(displayProps),
    withLayoutProps(layoutProps),
    withMarginProps(marginProps),
    withPaddingProps(paddingProps),
  );

  return <div className={classes}>{children}</div>;
};
