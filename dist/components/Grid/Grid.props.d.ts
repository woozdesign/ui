import { BasePropWithChildren, LayoutProp, MarginProp, PaddingProp, SpaceValue } from '../../utils';
export interface RowProps extends BasePropWithChildren, LayoutProp, MarginProp, PaddingProp {
    gutter?: [SpaceValue, SpaceValue];
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'around' | 'space-evenly';
}
export interface ColProps extends BasePropWithChildren, LayoutProp, MarginProp, PaddingProp {
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'around' | 'space-evenly';
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
}
