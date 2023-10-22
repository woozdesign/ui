import { BasePropWithChildren, DisplayProp, LayoutProp, MarginProp, PaddingProp } from '@/utils';

export interface RowProps extends BasePropWithChildren, DisplayProp, LayoutProp, MarginProp, PaddingProp {
  gutter?: [number, number]; // [horizontal, vertical]
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'around' | 'space-evenly';
}

export interface ColProps extends BasePropWithChildren, DisplayProp, LayoutProp, MarginProp, PaddingProp {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}
