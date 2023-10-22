import { ColorProp, MarginProp, SizeProp } from '../../utils';
export interface ProgressCircularProps extends MarginProp, ColorProp, SizeProp {
    value?: number;
    indeterminate?: boolean;
    rounded?: boolean;
}
