import { BasePropWithChildren, MarginProp } from '@/utils';
import React from 'react';

export interface RootProps extends React.HTMLProps<HTMLTableElement>, BasePropWithChildren, MarginProp {}
export interface HeaderProps extends React.HTMLProps<HTMLTableSectionElement>, BasePropWithChildren, MarginProp {}

export interface BodyProps extends React.HTMLProps<HTMLTableSectionElement>, BasePropWithChildren, MarginProp {}
export interface RowProps extends React.HTMLProps<HTMLTableRowElement>, BasePropWithChildren, MarginProp {}
export interface ColumnHeaderCellProps extends React.HTMLProps<HTMLTableHeaderCellElement>, BasePropWithChildren, MarginProp {}

export interface RowHeaderCellProps extends React.HTMLProps<HTMLTableHeaderCellElement>, BasePropWithChildren, MarginProp {}

export interface CellProps extends React.HTMLProps<HTMLTableCellElement>, BasePropWithChildren, MarginProp {}
