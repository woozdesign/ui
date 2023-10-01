import React, { FC, useMemo } from 'react';
import styles from './Slider.module.scss';

interface RangeProps {
  orientation: 'horizontal' | 'vertical';
  reverse: boolean;
  minValue: number;
  maxValue: number;
}

const Range: FC<RangeProps> = ({ orientation, reverse, minValue, maxValue }) => {
  const style: React.CSSProperties = useMemo(() => {
    const positionProp = orientation === 'vertical' ? (reverse ? 'top' : 'bottom') : reverse ? 'right' : 'left';
    const sizeProp = orientation === 'vertical' ? 'height' : 'width';
    return {
      [positionProp]: `${minValue}%`,
      [sizeProp]: `${maxValue - minValue}%`,
    };
  }, [orientation, reverse, minValue, maxValue]);

  return <div className={styles.range} style={style}></div>;
};

export default Range;
