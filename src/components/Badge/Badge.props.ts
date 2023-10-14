import { ColorProp, HighContrastProp, RadiusProp, SizeProp } from '@/utils';

export interface BadgeProps extends ColorProp, SizeProp, RadiusProp, HighContrastProp {
  variant?: 'solid' | 'ghost' | 'outlined';
  label: string | number;
}
