import React, { FC } from 'react';
interface ThumbProps {
    orientation: 'horizontal' | 'vertical';
    reverse: boolean;
    value: number;
    thumbSize: number;
    isMinThumb?: boolean;
    onPointerDown: (e: React.PointerEvent<HTMLDivElement>, isMinThumb: boolean) => void;
}
declare const Thumb: FC<ThumbProps>;
export default Thumb;
