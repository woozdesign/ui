import React from 'react';
import { ContentProps, DropdownMenuProps, ItemProps, SubContentProps, SubProps, SubTriggerProps, TriggerProps } from './DropdownMenu.props';
declare const DropdownMenu: {
    Root: React.FC<DropdownMenuProps>;
    Trigger: React.FC<TriggerProps>;
    Content: React.FC<ContentProps>;
    Item: React.FC<ItemProps>;
    Separator: React.FC;
    Sub: React.FC<SubProps>;
    SubTrigger: React.FC<SubTriggerProps>;
    SubContent: React.FC<SubContentProps>;
};
export default DropdownMenu;
