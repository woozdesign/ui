import { FC, ReactNode, HTMLProps } from 'react';
interface TableProps extends HTMLProps<HTMLTableElement> {
    children: ReactNode;
}
declare const Table: FC<TableProps> & {
    Root: FC<RootProps>;
    Header: FC<HeaderProps>;
    Body: FC<BodyProps>;
    Row: FC<RowProps>;
    ColumnHeaderCell: FC<ColumnHeaderCellProps>;
    RowHeaderCell: FC<RowHeaderCellProps>;
    Cell: FC<CellProps>;
};
interface RootProps extends HTMLProps<HTMLDivElement> {
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
export default Table;
