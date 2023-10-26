import { BasePropWithChildren, ShadowProp } from '../../utils';
import { WoozCommandCode } from '../../utils/contexts/Shortcut/Shortcut.props';
export interface DropdownMenuContextProps {
    onToggle: () => void;
}
export interface ChildProps {
    isOpen?: boolean;
}
export interface DropdownMenuProps extends ChildProps, BasePropWithChildren {
}
export interface TriggerProps extends BasePropWithChildren {
    shortcut?: WoozCommandCode[];
}
export interface ContentProps extends BasePropWithChildren, ShadowProp {
    isOpen: boolean;
    placement?: 'top' | 'bottom' | 'left' | 'right';
}
export interface ItemProps extends BasePropWithChildren {
    shortcut?: WoozCommandCode[];
    color?: string;
    onClick?: () => void;
    disabled?: boolean;
}
export interface SubProps extends BasePropWithChildren {
}
export interface SubTriggerProps extends TriggerProps {
}
export interface SubContentProps extends BasePropWithChildren {
    isSubOpen: boolean;
}
