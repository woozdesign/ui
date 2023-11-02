'use client';
import { extractDisplayProps, extractLayoutProps, extractMarginProps, extractPaddingProps, withDisplayProps, withLayoutProps, withMarginProps, withPaddingProps } from '@/utils';
import classNames from 'classnames';
import React from 'react';
import styles from './Section.module.scss';
import { SectionProps } from './Section.props';

export const Section: React.FC<SectionProps> = (props) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { others: paddingOthers, ...paddingProps } = extractPaddingProps(marginOthers);
  const { others: displayOthers, ...displayProps } = extractDisplayProps(paddingOthers);
  const { others: layoutOthersProps, ...layoutProps } = extractLayoutProps(displayOthers);

  const { className, style, children, space = 0 } = layoutOthersProps;
  const classes = classNames(
    styles[`section--${space}`],
    className,
    withDisplayProps(displayProps),
    withLayoutProps(layoutProps),
    withMarginProps(marginProps),
    withPaddingProps(paddingProps),
  );
  return (
    <section className={classes} style={style}>
      {children}
    </section>
  );
};

export default Section;
