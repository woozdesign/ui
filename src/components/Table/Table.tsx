'use client';

import React, { FC, ReactNode, HTMLProps } from 'react';
import classNames from 'classnames';
import styles from './Table.module.scss';

interface RootProps extends HTMLProps<HTMLTableElement> {
  children: ReactNode;
}

const Root: React.FC<RootProps> = ({ children, className, ...others }: RootProps) => {
  const classes = classNames(styles.table, className);
  return (
    <table {...others} className={classes}>
      {children}
    </table>
  );
};

interface HeaderProps extends HTMLProps<HTMLTableSectionElement> {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ className, children, ...others }: HeaderProps) => {
  const classes = classNames(styles.header, className);
  return (
    <thead {...others} className={classes}>
      {children}
    </thead>
  );
};

interface BodyProps extends HTMLProps<HTMLTableSectionElement> {
  children: ReactNode;
}

const Body: React.FC<BodyProps> = ({ className, children, ...others }: BodyProps) => {
  const classes = classNames(styles.body, className);
  return (
    <tbody {...others} className={classes}>
      {children}
    </tbody>
  );
};

interface RowProps extends HTMLProps<HTMLTableRowElement> {
  children: ReactNode;
}

const Row: React.FC<RowProps> = ({ className, children, ...others }: RowProps) => {
  const classes = classNames(styles.row, className);
  return (
    <tr {...others} className={classes}>
      {children}
    </tr>
  );
};

interface ColumnHeaderCellProps extends HTMLProps<HTMLTableHeaderCellElement> {
  children: ReactNode;
}

const ColumnHeaderCell: React.FC<ColumnHeaderCellProps> = ({ className, children, ...others }: ColumnHeaderCellProps) => {
  const classes = classNames(styles.columnHeaderCell, className);
  return (
    <th {...others} className={classes}>
      {children}
    </th>
  );
};

interface RowHeaderCellProps extends HTMLProps<HTMLTableHeaderCellElement> {
  children: ReactNode;
}

const RowHeaderCell: React.FC<RowHeaderCellProps> = ({ className, children, ...others }: RowHeaderCellProps) => {
  const classes = classNames(styles.rowHeaderCell, className);
  return (
    <th {...others} className={classes}>
      {children}
    </th>
  );
};
interface CellProps extends HTMLProps<HTMLTableCellElement> {
  children: ReactNode;
}

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
