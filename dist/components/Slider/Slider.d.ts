import { FC } from 'react';
import { ColorProp } from '../../utils';
interface SliderProps extends ColorProp {
    defaultValue: number[];
    radius?: 'full' | 'default';
    trackSize?: number;
    thumbSize?: number;
    reverse?: boolean;
    orientation?: 'horizontal' | 'vertical';
    onPointerDown?: (value: number[]) => void;
    onChange?: (value: number[]) => void;
    onPointerUp?: (value: number[]) => void;
}
declare const Slider: FC<SliderProps>;
export default Slider;
