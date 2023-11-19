import { BasePropWithChildren, ColorProp, HighContrastProp, MarginProp, RadiusProp, ShadowProp, SizeProp } from '../../utils';
import React from 'react';
export interface SegmentedContextProps {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
export interface RootProps extends BasePropWithChildren, MarginProp {
    defaultValue: string;
}
export interface TriggerProps extends BasePropWithChildren {
    value: string;
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
export interface ListProps extends MarginProp, BasePropWithChildren, RadiusProp, ColorProp, SizeProp, RadiusProp, HighContrastProp, ShadowProp {
    block?: boolean;
    justify?: 'center' | 'end' | 'space-between' | 'start';
}
export interface ContentProps extends BasePropWithChildren {
    value: string;
}
