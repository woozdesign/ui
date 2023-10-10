'use client';
/* eslint-disable react/display-name */
import React, { FC, ReactNode, HTMLProps } from 'react';
import classNames from 'classnames';
import styles from './Table.module.scss';

interface TableProps extends HTMLProps<HTMLTableElement> {
  children: ReactNode;
}

const Table: FC<TableProps> & {
  Root: FC<RootProps>;
  Header: FC<HeaderProps>;
  Body: FC<BodyProps>;
  Row: FC<RowProps>;
  ColumnHeaderCell: FC<ColumnHeaderCellProps>;
  RowHeaderCell: FC<RowHeaderCellProps>;
  Cell: FC<CellProps>;
} = ({ children, ...others }) => (
  <table {...others} className={styles.table}>
    {children}
  </table>
);

interface RootProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

Table.Root = ({ children, ...others }: RootProps) => (
  <div {...others} className={styles.root}>
    {children}
  </div>
);

interface HeaderProps extends HTMLProps<HTMLTableSectionElement> {
  children: ReactNode;
}

Table.Header = ({ children, ...others }: HeaderProps) => (
  <thead {...others} className={styles.header}>
    {children}
  </thead>
);

interface BodyProps extends HTMLProps<HTMLTableSectionElement> {
  children: ReactNode;
}

Table.Body = ({ children, ...others }: BodyProps) => (
  <tbody {...others} className={styles.body}>
    {children}
  </tbody>
);

interface RowProps extends HTMLProps<HTMLTableRowElement> {
  children: ReactNode;
}

Table.Row = ({ children, ...others }: RowProps) => (
  <tr {...others} className={styles.row}>
    {children}
  </tr>
);

interface ColumnHeaderCellProps extends HTMLProps<HTMLTableHeaderCellElement> {
  children: ReactNode;
}

Table.ColumnHeaderCell = ({ children, ...others }: ColumnHeaderCellProps) => (
  <th {...others} className={styles.columnHeaderCell}>
    {children}
  </th>
);

interface RowHeaderCellProps extends HTMLProps<HTMLTableHeaderCellElement> {
  children: ReactNode;
}

Table.RowHeaderCell = ({ children, ...others }: RowHeaderCellProps) => (
  <th {...others} className={styles.rowHeaderCell}>
    {children}
  </th>
);

interface CellProps extends HTMLProps<HTMLTableCellElement> {
  children: ReactNode;
}

Table.Cell = ({ children, ...others }: CellProps) => (
  <td {...others} className={styles.cell}>
    {children}
  </td>
);

export default Table;
