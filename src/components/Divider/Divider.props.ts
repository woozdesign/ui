import { ColorProp, SpaceSizeProp } from '@/utils';

export interface DividerProps extends ColorProp, SpaceSizeProp {
  orientation?: 'horizontal' | 'vertical';
}
