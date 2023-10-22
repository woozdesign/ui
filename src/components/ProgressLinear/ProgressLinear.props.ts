import { ColorProp, MarginProp, RadiusProp } from '@/utils';

export interface ProgressLinearProps extends MarginProp, ColorProp, RadiusProp {
  value?: number; // Progress from 0 to 100
  indeterminate?: boolean;
  height?: number;
  rounded?: boolean;
}
