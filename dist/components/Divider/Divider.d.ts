import { ColorProp, SpaceSizeProp } from '../../utils';
import React from 'react';
interface DividerProps extends ColorProp, SpaceSizeProp {
    orientation?: 'horizontal' | 'vertical';
}
declare const Divider: React.FC<DividerProps>;
export default Divider;
