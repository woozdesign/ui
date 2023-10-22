import { ColorProp, MarginProp, RadiusProp } from '../../utils';
export interface ProgressLinearProps extends MarginProp, ColorProp, RadiusProp {
    value?: number;
    indeterminate?: boolean;
    height?: number;
    rounded?: boolean;
}
