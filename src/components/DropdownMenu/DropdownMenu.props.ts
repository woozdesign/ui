import { BasePropWithChildren, ShadowProp } from '@/utils';
import { WoozCommandCode } from '@/utils/contexts/Shortcut/Shortcut.props';

export interface DropdownMenuContextProps {
  isOpen: boolean;
  onToggle: () => void;
}
export interface ChildProps {}

export interface DropdownMenuProps extends ChildProps, BasePropWithChildren {}

export interface TriggerProps extends BasePropWithChildren {
  shortcut?: WoozCommandCode[];
}

export interface ContentProps extends BasePropWithChildren, ShadowProp {
  placement?: 'top' | 'bottom' | 'left' | 'right';
  data: ItemProps[];
}

export interface ItemProps {
  shortcut?: WoozCommandCode[];
  color?: string;
  onClick?: () => void; // Add onClick prop
  disabled?: boolean; // Add disabled prop
  label: string;
  children?: ItemProps[];
}

export interface SubProps extends BasePropWithChildren {}

export interface SubTriggerProps extends TriggerProps {}

export interface SubContentProps extends BasePropWithChildren {}
