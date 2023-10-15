import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Box.module.scss';
import { BoxProps } from './Box.props';

const Box: FC<BoxProps> = ({ width = 'inherit', height = 'inherit', style, className, children, margin, padding, backgroundColor, color, borderRadius }) => {
  return (
    <div
      className={classNames(styles.box, className)}
      style={{ width: width, height: height, margin: margin, padding: padding, backgroundColor: backgroundColor, color: color, borderRadius: borderRadius, ...style }}
    >
      {children}
    </div>
  );
};

export default Box;
