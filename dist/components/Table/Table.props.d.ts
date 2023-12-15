import { BasePropWithChildren, BorderWidthProp, MarginProp, SizeProp } from '../../utils';
import React from 'react';
export interface RootProps extends Omit<React.HTMLProps<HTMLTableElement>, 'children' | 'size'>, BasePropWithChildren, SizeProp, MarginProp, BorderWidthProp {
}
export interface HeaderProps extends Omit<React.HTMLProps<HTMLTableSectionElement>, 'children' | 'size'>, BasePropWithChildren, MarginProp {
}
export interface BodyProps extends Omit<React.HTMLProps<HTMLTableSectionElement>, 'children' | 'size'>, BasePropWithChildren, MarginProp {
}
export interface RowProps extends Omit<React.HTMLProps<HTMLTableRowElement>, 'children' | 'size'>, BasePropWithChildren, MarginProp {
}
export interface ColumnHeaderCellProps extends Omit<React.HTMLProps<HTMLTableHeaderCellElement>, 'children' | 'size'>, BasePropWithChildren, MarginProp {
}
export interface RowHeaderCellProps extends Omit<React.HTMLProps<HTMLTableHeaderCellElement>, 'children' | 'size'>, BasePropWithChildren, MarginProp {
}
export interface CellProps extends Omit<React.HTMLProps<HTMLTableCellElement>, 'children' | 'size'>, BasePropWithChildren, MarginProp {
}
