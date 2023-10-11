import { ColorProp, SizeProp, TextSizeProp } from '@/utils/helper/props';

export interface TypographyProps extends TextSizeProp {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  highContrast?: boolean;
  weight?: 'light' | 'normal' | 'bold' | 'bolder';
  align?: 'start' | 'center' | 'end';
}
export interface HeadingProps extends ColorProp, TypographyProps {
  variant?: Extract<keyof JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
}

export interface TextProps extends ColorProp, TypographyProps {
  variant?: Extract<keyof JSX.IntrinsicElements, 'p' | 'label' | 'div' | 'span'>;
}

export interface StrongProps {
  children?: React.ReactNode;
}
