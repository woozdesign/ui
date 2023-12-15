import { BorderWidthProp, ColorProp, HighContrastProp, MarginProp, RadiusProp, ShadowProp, SizeProp } from '@/utils';

export interface BadgeProps extends ColorProp, SizeProp, RadiusProp, HighContrastProp, MarginProp, BorderWidthProp, ShadowProp {
  variant?: 'solid' | 'ghost' | 'outlined';
  label: string | number;
}
