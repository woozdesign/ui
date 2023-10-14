import React, { FC } from 'react';
import { ContentProps, ListProps, RootProps, TriggerProps } from './Tab.props';
export declare const Root: FC<RootProps>;
export declare const List: FC<ListProps>;
export declare const Trigger: FC<TriggerProps>;
export declare const Content: FC<ContentProps>;
export declare const Tab: {
    Root: React.FC<RootProps>;
    List: React.FC<ListProps>;
    Trigger: React.FC<TriggerProps>;
    Content: React.FC<ContentProps>;
};
export default Tab;
