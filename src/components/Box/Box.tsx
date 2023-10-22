import { extractDisplayProps, extractLayoutProps, extractMarginProps, extractPaddingProps, withDisplayProps, withLayoutProps, withMarginProps, withPaddingProps } from '@/utils';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Box.module.scss';
import { BoxProps } from './Box.props';

const Box: FC<BoxProps> = (props) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { others: paddingOthers, ...paddingProps } = extractPaddingProps(marginOthers);
  const { others: displayOthers, ...displayProps } = extractDisplayProps(paddingOthers);
  const { others: layoutOthersProps, ...layoutProps } = extractLayoutProps(displayOthers);
  const { style, className, children } = layoutOthersProps;

  const classes = classNames(styles.box, className, withDisplayProps(displayProps), withLayoutProps(layoutProps), withMarginProps(marginProps), withPaddingProps(paddingProps));

  return (
    <div className={classes} style={{ ...style }}>
      {children}
    </div>
  );
};

export default Box;
