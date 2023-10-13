import React, { ReactNode, HTMLProps } from 'react';
interface RootProps extends HTMLProps<HTMLTableElement> {
    children: ReactNode;
}
interface HeaderProps extends HTMLProps<HTMLTableSectionElement> {
    children: ReactNode;
}
interface BodyProps extends HTMLProps<HTMLTableSectionElement> {
    children: ReactNode;
}
interface RowProps extends HTMLProps<HTMLTableRowElement> {
    children: ReactNode;
}
interface ColumnHeaderCellProps extends HTMLProps<HTMLTableHeaderCellElement> {
    children: ReactNode;
}
interface RowHeaderCellProps extends HTMLProps<HTMLTableHeaderCellElement> {
    children: ReactNode;
}
interface CellProps extends HTMLProps<HTMLTableCellElement> {
    children: ReactNode;
}
declare const Table: {
    Root: React.FC<RootProps>;
    Header: React.FC<HeaderProps>;
    Body: React.FC<BodyProps>;
    Row: React.FC<RowProps>;
    ColumnHeaderCell: React.FC<ColumnHeaderCellProps>;
    RowHeaderCell: React.FC<RowHeaderCellProps>;
    Cell: React.FC<CellProps>;
};
export default Table;
