import React from 'react';
export interface TypographyProps {
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
export interface TitleProps extends TypographyProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6 | number;
    type?: 'default' | 'primary';
}
export interface TextProps extends Omit<React.HTMLProps<HTMLSpanElement>, 'size'> {
    type?: 'default' | 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
}
export interface ParagraphProps extends Omit<React.HTMLProps<HTMLParagraphElement>, 'size'> {
    type?: 'default' | 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
}
declare const Typography: {
    Title: React.FC<TitleProps>;
    Text: React.FC<TextProps>;
    Subtitle: React.FC<TitleProps>;
    Paragraph: React.FC<ParagraphProps>;
};
export default Typography;
