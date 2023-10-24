import React from 'react';
import { CodeProps, GradientProps, HeaderProps, LinkProps, TextProps } from './Typography.props';
declare const Typography: {
    Header: React.FC<HeaderProps>;
    Text: React.FC<TextProps>;
    Code: React.FC<CodeProps>;
    Link: React.FC<LinkProps>;
    Gradient: React.FC<GradientProps>;
};
export default Typography;
