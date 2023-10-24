import { ColorProp, MarginProp, RadiusProp, ShadowProp } from '@/utils';
import React from 'react';

export interface SliderProps extends MarginProp, ColorProp, RadiusProp, ShadowProp {
  defaultValue: number[];
  trackSize?: number;
  thumbSize?: number;
  reverse?: boolean;
  orientation?: 'horizontal' | 'vertical';
  onPointerDown?: (value: number[]) => void;
  onChange?: (value: number[]) => void;
  onPointerUp?: (value: number[]) => void;
}
export interface ThumbProps {
  orientation: 'horizontal' | 'vertical';
  reverse: boolean;
  value: number;
  thumbSize: number;
  isMinThumb?: boolean;
  onPointerDown: (e: React.PointerEvent<HTMLDivElement>, isMinThumb: boolean) => void;
}

export interface RangeProps {
  orientation: 'horizontal' | 'vertical';
  reverse: boolean;
  minValue: number;
  maxValue: number;
}
