import { ColorProp, MarginProp, PaddingProp, SpaceProp } from '@/utils';

export interface DividerProps extends MarginProp, PaddingProp, ColorProp {
  orientation?: 'horizontal' | 'vertical';
}
