import React, { ReactNode, FC } from 'react';
import { ColorProp, RadiusProp, SizeProp } from '../../utils';
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
export interface TriggerProps extends ColorProp, SizeProp, RadiusProp {
    value: string;
    highContrast?: boolean;
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
