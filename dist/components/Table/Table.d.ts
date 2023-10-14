import React from 'react';
import { BodyProps, CellProps, ColumnHeaderCellProps, HeaderProps, RootProps, RowHeaderCellProps, RowProps } from './Table.props';
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
