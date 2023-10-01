import React, { FC, useMemo } from 'react';
import styles from './Slider.module.scss';
interface ThumbProps {
  orientation: 'horizontal' | 'vertical';
  reverse: boolean;
  value: number;
  thumbSize: number;
  isMinThumb?: boolean;
  onPointerDown: (e: React.PointerEvent<HTMLDivElement>, isMinThumb: boolean) => void;
}

const Thumb: FC<ThumbProps> = ({ orientation, reverse, value, thumbSize, isMinThumb = false, onPointerDown }) => {
  const style: React.CSSProperties = useMemo(() => {
    const positionProp = orientation === 'vertical' ? (reverse ? 'top' : 'bottom') : reverse ? 'right' : 'left';
    const adjProp = orientation === 'vertical' ? 'left' : 'top';
    const sizeProp = orientation === 'vertical' ? 'width' : 'height';
    const calc = orientation === 'vertical' ? (reverse ? `calc(${value}% ` : `calc(${value}% - ${thumbSize}px)`) : reverse ? `calc(${value}% - ${thumbSize}px)` : `calc(${value}%`;
    return {
      [positionProp]: `${calc}`,
      [adjProp]: '50%',
      width: `${thumbSize}px`,
      height: `${thumbSize}px`,
    };
  }, [orientation, reverse, value, thumbSize]);

  return <div className={styles.thumb} style={style} onPointerDown={(e) => onPointerDown(e, isMinThumb)}></div>;
};
export default Thumb;
