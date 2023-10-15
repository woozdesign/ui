import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Box.module.scss';

interface BoxProps {
  margin?: React.CSSProperties['margin'];
  padding?: React.CSSProperties['padding'];
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  backgroundColor?: React.CSSProperties['backgroundColor'];
  color?: React.CSSProperties['color'];
  borderRadius?: React.CSSProperties['borderRadius'];
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const Box: FC<BoxProps> = ({ width = 'inherit', height = 'inherit', style, className, children, margin, padding, backgroundColor, color, borderRadius }) => {
  return (
    <div
      className={classNames(styles.box, className)}
      style={{ margin: margin, padding: padding, backgroundColor: backgroundColor, color: color, borderRadius: borderRadius, ...style }}
    >
      {children}
    </div>
  );
};

export default Box;
