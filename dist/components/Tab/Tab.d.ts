import { ColorProp, HighContrastProp, RadiusProp, SizeProp } from '../../utils';
import React, { FC, ReactNode } from 'react';
interface RootProps {
    children: ReactNode;
    defaultValue: string;
}
export declare const Root: FC<RootProps>;
export interface ListProps {
    justify?: 'center' | 'end' | 'space-between' | 'start';
    children: ReactNode;
}
export declare const List: FC<ListProps>;
export interface TriggerProps extends ColorProp, SizeProp, RadiusProp, HighContrastProp {
    value: string;
    onClick?: () => void;
    children: ReactNode;
}
export declare const Trigger: FC<TriggerProps>;
interface ContentProps {
    value: string;
    children: ReactNode;
}
export declare const Content: FC<ContentProps>;
export declare const Tab: {
    Root: React.FC<RootProps>;
    List: React.FC<ListProps>;
    Trigger: React.FC<TriggerProps>;
    Content: React.FC<ContentProps>;
};
export default Tab;
