import { ColorProp, SizeProp } from '../../utils';
export interface ProgressCircularProps extends ColorProp, SizeProp {
    value?: number;
    indeterminate?: boolean;
    rounded?: boolean;
}
