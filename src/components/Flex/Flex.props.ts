import { BasePropWithChildren, DisplayProp, LayoutProp, MarginProp, PaddingProp, SpaceValue } from '@/utils';

export interface FlexProps extends BasePropWithChildren, LayoutProp, MarginProp, PaddingProp {
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'around' | 'space-evenly';
  direction?: 'row' | 'column';
  space?: SpaceValue;
}
