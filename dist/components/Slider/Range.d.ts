import { FC } from 'react';
interface RangeProps {
    orientation: 'horizontal' | 'vertical';
    reverse: boolean;
    minValue: number;
    maxValue: number;
}
declare const Range: FC<RangeProps>;
export default Range;
