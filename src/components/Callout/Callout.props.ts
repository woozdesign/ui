import { BasePropWithChildren, ColorProp, HighContrastProp, MarginProp, RadiusProp, SizeProp } from '@/utils';

export interface CalloutProps extends BasePropWithChildren, SizeProp, ColorProp, HighContrastProp, RadiusProp, MarginProp {
  variant: 'solid' | 'ghost' | 'outlined' | 'translucent';
}
