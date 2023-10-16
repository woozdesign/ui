import { ColorProp, HighContrastProp, RadiusProp, SizeProp, TextSizeProp } from '@/utils/helper/props';
import React from 'react';

export interface TypographyProps extends TextSizeProp, HighContrastProp {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  weight?: 'light' | 'normal' | 'bold' | 'bolder';
  align?: 'start' | 'center' | 'end';
}
export interface HeaderProps extends ColorProp, TypographyProps {
  variant?: Extract<keyof JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
}

export interface TextProps extends ColorProp, TypographyProps {
  variant?: Extract<keyof JSX.IntrinsicElements, 'p' | 'label' | 'div' | 'span'>;
}

export interface StrongProps {
  children?: React.ReactNode;
}
export interface LinkProps extends ColorProp, TypographyProps {
  href?: string;
  onClick?: () => void;
  target?: React.HTMLProps<HTMLAnchorElement>['target'];
  children?: React.ReactNode;
}
export interface CodeProps extends ColorProp, RadiusProp, TypographyProps {
  children?: React.ReactNode;
}

export interface GradientProps extends Omit<TypographyProps, 'highContrast'> {
  gradientColors: [string, string];
  children?: React.ReactNode;
}
