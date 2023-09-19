'use client';
import { combineClassNames } from '@/utils/helper/combineClassNames';
import React from 'react';
import styles from './Layout.module.scss';

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  // className?: string;
  children: React.ReactNode;
  // style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({ children, ...other }) => (
  <div {...other} className={combineClassNames([other.className ?? '', styles.container])} style={...other.style}>
    {children}
  </div>
);

interface RowProps extends React.HTMLProps<HTMLDivElement> {
  gutter?: [number, number]; // [horizontal, vertical]
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'around' | 'space-evenly';
  children: React.ReactNode;
}
export const Row: React.FC<RowProps> = ({ gutter = [0, 0], align = 'center', justify = 'center', children, ...others }) => {
  const classes = [styles.row, others.className ?? ''];

  return (
    <div
      {...others}
      className={combineClassNames(classes)}
      style={
        {
          ...others.style,
          margin: `-${gutter[1] / 2}px -${gutter[0] / 2}px`,
          alignItems: align,
          justifyContent: justify,
          '--horizontal-gutter': `${gutter[0]}px`,
          '--vertical-gutter': `${gutter[1]}px`,
        } as React.CSSProperties
      }
    >
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? React.cloneElement(child, {
              style: {
                ...child.props.style,
                paddingLeft: `${gutter[0] / 2}px`,
                paddingRight: `${gutter[0] / 2}px`,
                paddingTop: `${gutter[1] / 2}px`,
                paddingBottom: `${gutter[1] / 2}px`,
              },
            })
          : child;
      })}
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
export const Col: React.FC<ColProps> = ({ xs, sm, md, lg, xl, children, style, ...other }) => {
  const classes = [
    styles.col,
    other.className ?? '',
    xs ? styles[`xs-${xs}`] : '',
    sm ? styles[`sm-${sm}`] : '',
    md ? styles[`md-${md}`] : '',
    lg ? styles[`lg-${lg}`] : '',
    xl ? styles[`xl-${xl}`] : '',
  ];

  const combinedStyle = {
    paddingLeft: 'var(--horizontal-gutter) / 2',
    paddingRight: 'var(--horizontal-gutter) / 2',
    ...style,
  };

  return (
    <div {...other} className={combineClassNames(classes)} style={combinedStyle}>
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
