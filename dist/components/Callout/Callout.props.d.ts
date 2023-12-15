/// <reference types="react" />
import { BasePropWithChildren, BorderWidthProp, ColorProp, HighContrastProp, MarginProp, RadiusProp, SizeProp } from '../../utils';
export interface CalloutProps extends BasePropWithChildren, SizeProp, ColorProp, HighContrastProp, RadiusProp, MarginProp, BorderWidthProp {
    variant?: 'solid' | 'ghost' | 'outlined' | 'translucent';
    iconAppend?: React.ReactNode;
    iconPrepend?: React.ReactNode;
}
