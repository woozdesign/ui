import React from 'react';
import { CodeProps, HeaderProps, LinkProps, StrongProps, TextProps } from './Typography.props';
declare const Typography: {
    Header: React.FC<HeaderProps>;
    Text: React.FC<TextProps>;
    Strong: React.FC<StrongProps>;
    Code: React.FC<CodeProps>;
    Link: React.FC<LinkProps>;
};
export default Typography;
