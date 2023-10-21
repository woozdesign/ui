import { ColorProp, HighContrastProp, MarginProp, RadiusProp, SizeProp } from '@/utils';

export interface BadgeProps extends ColorProp, SizeProp, RadiusProp, HighContrastProp, MarginProp {
  variant?: 'solid' | 'ghost' | 'outlined';
  label: string | number;
}
