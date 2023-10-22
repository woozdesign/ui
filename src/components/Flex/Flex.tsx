'use client';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Flex.module.scss';
import { FlexProps } from './Flex.props';
import { extractDisplayProps, extractLayoutProps, extractMarginProps, extractPaddingProps, withDisplayProps, withLayoutProps, withMarginProps, withPaddingProps } from '@/utils';

const Flex: FC<FlexProps> = (props) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { others: paddingOthers, ...paddingProps } = extractPaddingProps(marginOthers);
  const { others: layoutOthersProps, ...layoutProps } = extractLayoutProps(paddingOthers);

  const { className, style, children, direction = 'row', space = 2, align = 'start', justify = 'start' } = displayOthers;

  const classes = classNames(
    styles[`box`],
    styles[`box--${direction}`],
    styles[`box--${space}`],
    className,
    withMarginProps(marginProps),
    withPaddingProps(paddingProps),
    withLayoutProps(layoutProps),
  );

  return (
    <div
      className={classes}
      style={{
        alignItems: align,
        justifyContent: justify,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
