import React, { FC, useState, useRef, useCallback, useEffect } from 'react';
import styles from './Slider.module.scss';

interface SliderProps {
  defaultValue: number[];
  radius?: 'full' | 'default';
  orientation?: 'horizontal' | 'vertical';
  onPointerDown?: (value: number[]) => void;
  onChange?: (value: number[]) => void;
  onPointerUp?: (value: number[]) => void;
}
const Slider: FC<SliderProps> = ({ defaultValue, radius = 'default', orientation = 'horizontal', onPointerDown, onChange, onPointerUp }) => {
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

  const calculateValue = useCallback((clientX: number) => {
    if (!sliderRef.current) return 0;
    const { left, width } = sliderRef.current.getBoundingClientRect();
    let percentage = ((clientX - left) / width) * 100;
    percentage = Math.max(0, Math.min(100, percentage)); // Clamp the value between 0 and 100
    return Math.round(percentage);
  }, []);

  const handleThumbMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>, isMinThumb: boolean) => {
      event.preventDefault();
      onPointerDown?.([minValue, maxValue]);
      const move = (e: PointerEvent) => {
        const value = calculateValue(e.clientX);
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
    <div className={`${styles.slider} ${styles[`slider--${orientation}`]} ${styles[`slider--${radius}`]}`} ref={sliderRef}>
      <div className={styles.track}>
        <div className={styles.range} style={{ left: `${minValue}%`, width: `${maxValue - minValue}%` }}></div>
      </div>
      {defaultValue.length === 2 && (
        <>
          <div className={styles.thumb} style={{ left: `${minValue}%` }} onPointerDown={(e) => handleThumbMove(e, true)}></div>
          <div className={styles.thumb} style={{ left: `${maxValue}%` }} onPointerDown={(e) => handleThumbMove(e, false)}></div>
        </>
      )}
      {defaultValue.length === 1 && <div className={styles.thumb} style={{ left: `${maxValue}%` }} onPointerDown={(e) => handleThumbMove(e, false)}></div>}
    </div>
  );
};

export default Slider;
