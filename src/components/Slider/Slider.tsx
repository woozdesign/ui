import React, { FC, useState, useRef, useCallback, useEffect } from 'react';
import styles from './Slider.module.scss';
import { ColorProp, RadiusProp, combineClassNames } from '@/utils';
import Range from './Range';
import Thumb from './Thumb';

interface SliderProps extends ColorProp, RadiusProp {
  defaultValue: number[];
  trackSize?: number;
  thumbSize?: number;
  reverse?: boolean;
  orientation?: 'horizontal' | 'vertical';
  onPointerDown?: (value: number[]) => void;
  onChange?: (value: number[]) => void;
  onPointerUp?: (value: number[]) => void;
}
const Slider: FC<SliderProps> = ({
  defaultValue,
  radius,
  color,
  reverse = false,
  orientation = 'horizontal',
  trackSize = 4,
  thumbSize = 16,
  onPointerDown,
  onChange,
  onPointerUp,
}) => {
  if (trackSize > thumbSize) thumbSize = trackSize * 1.2;

  const classes = [styles.slider, styles[`slider--${orientation}`]];
  const [minValue, setMinValue] = useState(defaultValue.length > 1 ? defaultValue[0] : 0);
  const [maxValue, setMaxValue] = useState(defaultValue.length > 1 ? defaultValue[1] : defaultValue[0]);
  const sliderRef = useRef<HTMLDivElement>(null);

  const valueRef = useRef([minValue, maxValue]);

  // Call onChange when minValue or maxValue changes
  useEffect(() => {
    onChange?.([minValue, maxValue]);
  }, [minValue, maxValue, onChange]);

  useEffect(() => {
    valueRef.current = [minValue, maxValue];
  }, [minValue, maxValue]);

  const calculateValue = useCallback(
    (clientX: number, clientY: number) => {
      if (!sliderRef.current) return 0;
      const { top, left, height, width } = sliderRef.current.getBoundingClientRect();
      let percentage;
      if (orientation === 'vertical') {
        percentage = reverse ? ((clientY - top) / height) * 100 : 100 - ((clientY - top) / height) * 100;
      } else {
        percentage = reverse ? 100 - ((clientX - left) / width) * 100 : ((clientX - left) / width) * 100;
      }
      percentage = Math.max(0, Math.min(100, percentage)); // Clamp the value between 0 and 100
      return Math.round(percentage);
    },
    [orientation, reverse],
  );

  const handleThumbMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>, isMinThumb: boolean) => {
      event.preventDefault();
      onPointerDown?.([minValue, maxValue]);
      const move = (e: PointerEvent) => {
        const value = calculateValue(e.clientX, e.clientY);
        if (isMinThumb ? value < maxValue : value >= minValue) {
          isMinThumb ? setMinValue(value) : setMaxValue(value);
        }
      };

      const endMove = () => {
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', endMove);
        document.removeEventListener('pointerleave', endMove);
        onPointerUp?.(valueRef.current);
      };
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', endMove);

      document.addEventListener('pointerleave', endMove);
    },
    [calculateValue, minValue, maxValue, onPointerDown, onPointerUp],
  );

  return (
    <div
      className={combineClassNames(classes)}
      style={orientation === 'vertical' ? { width: `${trackSize}px`, height: '100%' } : { height: `${trackSize}px`, width: '100%' }}
      data-accent-color={color}
      data-radius={radius}
      ref={sliderRef}
    >
      <div className={styles.track}>
        <Range orientation={orientation} reverse={reverse} minValue={minValue} maxValue={maxValue} />
      </div>
      {defaultValue.length === 2 && (
        <>
          <Thumb orientation={orientation} reverse={reverse} value={minValue} thumbSize={thumbSize} isMinThumb onPointerDown={handleThumbMove} />
          <Thumb orientation={orientation} reverse={reverse} value={maxValue} thumbSize={thumbSize} onPointerDown={handleThumbMove} />
        </>
      )}
      {defaultValue.length === 1 && <Thumb orientation={orientation} reverse={reverse} value={maxValue} thumbSize={thumbSize} onPointerDown={handleThumbMove} />}
    </div>
  );
};

export default Slider;
