'use client';

import classNames from 'classnames';
import React from 'react';
import styles from './Table.module.scss';
import { BodyProps, CellProps, ColumnHeaderCellProps, HeaderProps, RootProps, RowHeaderCellProps, RowProps } from './Table.props';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';

const Root: React.FC<RootProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { className, style, children, size = 'medium' } = otherMarginProps;

  const classes = classNames(styles.table, className, withMarginProps(marginProps), withBreakpoints(size, 'wd-table', styles));
  return (
    <table className={classes} style={style}>
      {children}
    </table>
  );
};

const Header: React.FC<HeaderProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { className, style, children } = otherMarginProps;

  const classes = classNames(styles.header, className, withMarginProps(marginProps));
  return (
    <thead className={classes} style={style}>
      {children}
    </thead>
  );
};

const Body: React.FC<BodyProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { className, style, children } = otherMarginProps;

  const classes = classNames(styles.body, className, withMarginProps(marginProps));
  return (
    <tbody className={classes} style={style}>
      {children}
    </tbody>
  );
};

const Row: React.FC<RowProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { className, style, children } = otherMarginProps;

  const classes = classNames(styles.row, className, withMarginProps(marginProps));
  return (
    <tr className={classes} style={style}>
      {children}
    </tr>
  );
};
const ColumnHeaderCell: React.FC<ColumnHeaderCellProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { className, style, children } = otherMarginProps;

  const classes = classNames(styles.columnHeaderCell, className, withMarginProps(marginProps));
  return (
    <th className={classes} style={style}>
      {children}
    </th>
  );
};

const RowHeaderCell: React.FC<RowHeaderCellProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { className, style, children } = otherMarginProps;

  const classes = classNames(styles.rowHeaderCell, className, withMarginProps(marginProps));
  return (
    <th className={classes} style={style}>
      {children}
    </th>
  );
};
const Cell: React.FC<CellProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { className, style, children } = otherMarginProps;

  const classes = classNames(styles.cell, className, withMarginProps(marginProps));
  return (
    <td className={classes} style={style}>
      {children}
    </td>
  );
};

const Table = {
  Root,
  Header,
  Body,
  Row,
  ColumnHeaderCell,
  RowHeaderCell,
  Cell,
};
export default Table;
