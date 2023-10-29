import React from 'react';
import { ContentProps, ItemProps, RootProps, TriggerProps } from './Select.props';
declare const Select: {
    Root: React.FC<RootProps>;
    Trigger: React.FC<TriggerProps>;
    Content: React.FC<ContentProps>;
    Item: React.FC<ItemProps>;
};
export default Select;
