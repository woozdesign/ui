import { BasePropWithChildren, LayoutProp, MarginProp, PaddingProp } from '../../utils';
export interface RowProps extends BasePropWithChildren, LayoutProp, MarginProp, PaddingProp {
    gutter?: [number, number];
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'around' | 'space-evenly';
}
export interface ColProps extends BasePropWithChildren, LayoutProp, MarginProp, PaddingProp {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}
