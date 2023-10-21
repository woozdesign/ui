import { ColorProp, MarginProp, PaddingProp } from '../../utils';
export interface DividerProps extends MarginProp, PaddingProp, ColorProp {
    orientation?: 'horizontal' | 'vertical';
}
