'use client';

import React, { FC, useMemo } from 'react';
import styles from './Slider.module.scss';
import { RangeProps } from './Slider.props';

const Range: FC<RangeProps> = (props) => {
  const { orientation, reverse, minValue, maxValue } = props;

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
