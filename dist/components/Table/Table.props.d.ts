import { BasePropWithChildren, MarginProp } from '../../utils';
import React from 'react';
export interface RootProps extends Omit<React.HTMLProps<HTMLTableElement>, 'children'>, BasePropWithChildren, MarginProp {
}
export interface HeaderProps extends Omit<React.HTMLProps<HTMLTableSectionElement>, 'children'>, BasePropWithChildren, MarginProp {
}
export interface BodyProps extends Omit<React.HTMLProps<HTMLTableSectionElement>, 'children'>, BasePropWithChildren, MarginProp {
}
export interface RowProps extends Omit<React.HTMLProps<HTMLTableRowElement>, 'children'>, BasePropWithChildren, MarginProp {
}
export interface ColumnHeaderCellProps extends Omit<React.HTMLProps<HTMLTableHeaderCellElement>, 'children'>, BasePropWithChildren, MarginProp {
}
export interface RowHeaderCellProps extends Omit<React.HTMLProps<HTMLTableHeaderCellElement>, 'children'>, BasePropWithChildren, MarginProp {
}
export interface CellProps extends Omit<React.HTMLProps<HTMLTableCellElement>, 'children'>, BasePropWithChildren, MarginProp {
}
