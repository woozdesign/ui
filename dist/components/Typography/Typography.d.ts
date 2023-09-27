import React from 'react';
import { ParagraphProps, TextProps, TitleProps } from './Typography.props';
declare const Typography: {
    Title: React.FC<TitleProps>;
    Text: React.FC<TextProps>;
    Subtitle: React.FC<TitleProps>;
    Paragraph: React.FC<ParagraphProps>;
};
export default Typography;
