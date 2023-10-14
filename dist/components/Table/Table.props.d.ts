import React from 'react';
export interface RootProps extends React.HTMLProps<HTMLTableElement> {
    children: React.ReactNode;
}
export interface HeaderProps extends React.HTMLProps<HTMLTableSectionElement> {
    children: React.ReactNode;
}
export interface BodyProps extends React.HTMLProps<HTMLTableSectionElement> {
    children: React.ReactNode;
}
export interface RowProps extends React.HTMLProps<HTMLTableRowElement> {
    children: React.ReactNode;
}
export interface ColumnHeaderCellProps extends React.HTMLProps<HTMLTableHeaderCellElement> {
    children: React.ReactNode;
}
export interface RowHeaderCellProps extends React.HTMLProps<HTMLTableHeaderCellElement> {
    children: React.ReactNode;
}
export interface CellProps extends React.HTMLProps<HTMLTableCellElement> {
    children: React.ReactNode;
}
