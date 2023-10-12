import React from 'react';
import { CodeProps, HeadingProps, LinkProps, StrongProps, TextProps } from './Typography.props';
declare const Typography: {
    Heading: React.FC<HeadingProps>;
    Text: React.FC<TextProps>;
    Strong: React.FC<StrongProps>;
    Code: React.FC<CodeProps>;
    Link: React.FC<LinkProps>;
};
export default Typography;
