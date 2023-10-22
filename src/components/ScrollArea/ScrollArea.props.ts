import { BasePropWithChildren, ColorProp, MarginProp, PaddingProp, RadiusProp, SizeProp } from '@/utils';

export interface ScrollAreaProps extends MarginProp, PaddingProp, BasePropWithChildren, RadiusProp, ColorProp, SizeProp {
  id: string; // Add this line
  type?: 'always' | 'auto';
  scrollbars?: 'vertical' | 'horizontal';
  persistent?: boolean;
}
