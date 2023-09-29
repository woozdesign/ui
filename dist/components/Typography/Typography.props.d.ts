/// <reference types="react" />
import { ColorProp, SizeProp } from '@/utils/helper/props';
export interface TypographyProps {
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
export interface TitleProps extends ColorProp, TypographyProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6 | number;
}
export interface TextProps extends ColorProp, SizeProp, Omit<React.HTMLProps<HTMLSpanElement>, 'size' | 'color'> {
}
export interface ParagraphProps extends Omit<React.HTMLProps<HTMLParagraphElement>, 'size' | 'color'>, ColorProp, SizeProp {
}
