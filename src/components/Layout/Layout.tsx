'use client';
import classNames from 'classnames';
import React from 'react';
import styles from './Layout.module.scss';

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  // className?: string;
  children: React.ReactNode;
  // style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({ children, ...others }) => {
  const classes = classNames(styles.container, others.className);

  const combinedStyles = { ...others.style };
  return (
    <div {...others} className={classes} style={combinedStyles}>
      {children}
    </div>
  );
};

interface RowProps extends React.HTMLProps<HTMLDivElement> {
  gutter?: [number, number]; // [horizontal, vertical]
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'around' | 'space-evenly';
  children?: React.ReactNode;
}
export const Row: React.FC<RowProps> = ({ gutter = [0, 0], align = 'start', justify = 'start', children, ...others }) => {
  const combinedStyle = {
    alignItems: align,
    justifyContent: justify,
    '--horizontal-gutter': `${gutter[0]}px`,
    '--vertical-gutter': `${gutter[1]}px`,
    ...others.style,
  };

  const classes = classNames(styles.row, others.className);

  return (
    <div {...others} className={classes} style={combinedStyle}>
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
  children?: React.ReactNode;
}
export const Col: React.FC<ColProps> = ({ xs, sm, md, lg, xl, children, ...others }) => {
  const classes = classNames(
    styles.col,
    others.className ?? '',
    typeof xs == 'number' ? styles[`xs-${xs}`] : '',
    typeof sm == 'number' ? styles[`sm-${sm}`] : '',
    typeof md == 'number' ? styles[`md-${md}`] : '',

    typeof lg == 'number' ? styles[`lg-${lg}`] : '',
    typeof xl == 'number' ? styles[`xl-${xl}`] : '',
  );

  const combinedStyle = {
    ...others.style,
  };

  return (
    <div {...others} className={classes} style={combinedStyle}>
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
