import { FC } from 'react';
import { ColorProp, RadiusProp } from '../../utils';
interface ProgressLinearProps extends ColorProp, RadiusProp {
    value?: number;
    indeterminate?: boolean;
    height?: number;
    rounded?: boolean;
}
declare const ProgressLinear: FC<ProgressLinearProps>;
export default ProgressLinear;
