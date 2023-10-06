import React, { ReactNode } from 'react';
import { WoozCommandCode } from '../../utils/contexts/Shortcut/Shortcut.props';
import '@woozdesign/icons/dist/styles.css';
interface DropdownMenuProps extends ChildProps {
    children: ReactNode;
}
interface ChildProps {
    isOpen?: boolean;
}
interface TriggerProps {
    shortcut?: WoozCommandCode[];
    children: ReactNode;
}
interface ContentProps {
    children: ReactNode;
    isOpen: boolean;
}
interface ItemProps {
    children: ReactNode;
    shortcut?: WoozCommandCode[];
    color?: string;
    onClick?: () => void;
    disabled?: boolean;
}
interface SubProps {
    children: ReactNode;
}
interface SubTriggerProps extends TriggerProps {
}
interface SubContentProps {
    children: ReactNode;
    isSubOpen: boolean;
}
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
