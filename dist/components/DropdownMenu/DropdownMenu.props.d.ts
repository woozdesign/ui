import { BasePropWithChildren, ShadowProp } from '../../utils';
import { WoozCommandCode } from '../../utils/contexts/Shortcut/Shortcut.props';
export interface DropdownMenuContextProps {
    open: boolean;
    isOpen: boolean;
    isRendered: boolean;
    onToggle: () => void;
}
export interface ChildProps {
}
export interface DropdownMenuProps extends ChildProps, BasePropWithChildren {
}
export interface TriggerProps extends BasePropWithChildren {
    shortcut?: WoozCommandCode[];
}
export interface ContentProps extends BasePropWithChildren, ShadowProp {
    placement?: 'top' | 'bottom' | 'left' | 'right';
    items: ItemProps[];
}
export type ItemProps = {
    variant?: 'item' | 'separator';
} & ({
    variant: 'item';
    shortcut?: WoozCommandCode[];
    color?: string;
    onClick?: () => void;
    disabled?: boolean;
    label: string;
    children?: ItemProps[];
} | {
    variant: 'separator';
});
export interface SubProps extends BasePropWithChildren {
}
export interface SubTriggerProps extends TriggerProps {
}
export interface SubContentProps extends BasePropWithChildren {
}
