import { ColorProp, MarginProp, SizeProp } from '@/utils';

export interface ProgressCircularProps extends MarginProp, ColorProp, SizeProp {
  value?: number; // Progress from 0 to 100
  indeterminate?: boolean;
  rounded?: boolean;
}
