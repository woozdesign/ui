import { ColorProp, SpaceProp } from '../../utils';
export interface DividerProps extends ColorProp, SpaceProp {
    orientation?: 'horizontal' | 'vertical';
}
