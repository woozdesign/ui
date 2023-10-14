'use client';

import classNames from 'classnames';
import React from 'react';
import styles from './Table.module.scss';
import { BodyProps, CellProps, ColumnHeaderCellProps, HeaderProps, RootProps, RowHeaderCellProps, RowProps } from './Table.props';

const Root: React.FC<RootProps> = ({ children, className, ...others }: RootProps) => {
  const classes = classNames(styles.table, className);
  return (
    <table {...others} className={classes}>
      {children}
    </table>
  );
};

const Header: React.FC<HeaderProps> = ({ className, children, ...others }: HeaderProps) => {
  const classes = classNames(styles.header, className);
  return (
    <thead {...others} className={classes}>
      {children}
    </thead>
  );
};

const Body: React.FC<BodyProps> = ({ className, children, ...others }: BodyProps) => {
  const classes = classNames(styles.body, className);
  return (
    <tbody {...others} className={classes}>
      {children}
    </tbody>
  );
};

const Row: React.FC<RowProps> = ({ className, children, ...others }: RowProps) => {
  const classes = classNames(styles.row, className);
  return (
    <tr {...others} className={classes}>
      {children}
    </tr>
  );
};
const ColumnHeaderCell: React.FC<ColumnHeaderCellProps> = ({ className, children, ...others }: ColumnHeaderCellProps) => {
  const classes = classNames(styles.columnHeaderCell, className);
  return (
    <th {...others} className={classes}>
      {children}
    </th>
  );
};

const RowHeaderCell: React.FC<RowHeaderCellProps> = ({ className, children, ...others }: RowHeaderCellProps) => {
  const classes = classNames(styles.rowHeaderCell, className);
  return (
    <th {...others} className={classes}>
      {children}
    </th>
  );
};
const Cell: React.FC<CellProps> = ({ className, children, ...others }: CellProps) => {
  const classes = classNames(styles.cell, className);
  return (
    <td {...others} className={classes}>
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
