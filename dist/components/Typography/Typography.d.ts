import React from 'react';
import { TextProps, HeadingProps, StrongProps } from './Typography.props';
declare const Typography: {
    Heading: React.FC<HeadingProps>;
    Text: React.FC<TextProps>;
    Strong: React.FC<StrongProps>;
};
export default Typography;
