'use client';
import { combineClassNames } from '@/utils/helper/combineClassNames';
import React from 'react';
import styles from './Layout.module.scss';

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  // className?: string;
  children: React.ReactNode;
  // style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({ children, className, style, ...other }) => {
  const classes = [styles.container, className];
  const combinedStyles = { ...style, ...other.style };
  return (
    <div className={combineClassNames(classes)} style={combinedStyles} {...other}>
      {children}
    </div>
  );
};

interface RowProps extends React.HTMLProps<HTMLDivElement> {
  gutter?: [number, number]; // [horizontal, vertical]
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'around' | 'space-evenly';
  children: React.ReactNode;
}
export const Row: React.FC<RowProps> = ({ gutter = [0, 0], children, className, style, ...others }) => {
  const classes = [styles.row, className];

  const combinedStyle = {
    '--horizontal-gutter': `${gutter[0]}px`,
    '--vertical-gutter': `${gutter[1]}px`,
    ...style,
    ...others.style,
  };

  return (
    <div className={combineClassNames(classes)} style={combinedStyle} {...others}>
      {children}
    </div>
  );
};

interface ColProps extends React.HTMLProps<HTMLDivElement> {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children: React.ReactNode;
}
export const Col: React.FC<ColProps> = ({ xs, sm, md, lg, xl, children, className, style, ...other }) => {
  const classes = [
    styles.col,
    className,
    xs ? styles[`xs-${xs}`] : '',
    sm ? styles[`sm-${sm}`] : '',
    md ? styles[`md-${md}`] : '',
    lg ? styles[`lg-${lg}`] : '',
    xl ? styles[`xl-${xl}`] : '',
  ];

  const combinedStyle = {
    ...style,
    ...other.style,
  };

  return (
    <div className={combineClassNames(classes)} style={combinedStyle} {...other}>
      {children}
    </div>
  );
};

const Layout = {
  Container,
  Row,
  Col,
};

export default Layout;
