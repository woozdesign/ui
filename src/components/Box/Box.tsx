import { extractLayoutProps, extractMarginProps, extractPaddingProps, withLayoutProps, withMarginProps, withPaddingProps } from '@/utils';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Box.module.scss';
import { BoxProps } from './Box.props';

const Box: FC<BoxProps> = (props) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { others: paddingOthers, ...paddingProps } = extractPaddingProps(marginOthers);
  const { others: layoutOthersProps, ...layoutProps } = extractLayoutProps(paddingOthers);
  const { style, className, children } = layoutOthersProps;

  const classes = classNames(styles.box, className, withLayoutProps(layoutProps), withMarginProps(marginProps), withPaddingProps(paddingProps));

  return (
    <div className={classes} style={{ ...style }}>
      {children}
    </div>
  );
};

export default Box;
