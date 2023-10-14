import { ColorProp, RadiusProp } from '../../utils';
export interface ProgressLinearProps extends ColorProp, RadiusProp {
    value?: number;
    indeterminate?: boolean;
    height?: number;
    rounded?: boolean;
}
