import React from 'react';
import { ColorProp } from '../../utils';
interface DividerProps extends ColorProp {
    orientation?: 'horizontal' | 'vertical';
    space?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}
declare const Divider: React.FC<DividerProps>;
export default Divider;
