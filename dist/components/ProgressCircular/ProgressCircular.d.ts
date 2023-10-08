import { FC } from 'react';
import { ColorProp, SizeProp } from '../../utils';
interface ProgressCircularProps extends ColorProp, SizeProp {
    value?: number;
    indeterminate?: boolean;
    rounded?: boolean;
}
declare const ProgressCircular: FC<ProgressCircularProps>;
export default ProgressCircular;
