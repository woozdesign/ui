import React from 'react';
import { ColorProp, SpaceSizeProp } from '../../utils';
interface DividerProps extends ColorProp, SpaceSizeProp {
    orientation?: 'horizontal' | 'vertical';
}
declare const Divider: React.FC<DividerProps>;
export default Divider;
