import { WoozCommandCode } from '@/utils/contexts/Shortcut/Shortcut.props';

export interface DropdownMenuContextProps {
  onToggle: () => void;
}
export interface ChildProps {
  isOpen?: boolean;
}

export interface DropdownMenuProps extends ChildProps {
  children: React.ReactNode;
}

export interface TriggerProps {
  shortcut?: WoozCommandCode[];
  children: React.ReactNode;
}

export interface ContentProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export interface ItemProps {
  children: React.ReactNode;
  shortcut?: WoozCommandCode[];
  color?: string;
  onClick?: () => void; // Add onClick prop
  disabled?: boolean; // Add disabled prop
}

export interface SubProps {
  children: React.ReactNode;
}

export interface SubTriggerProps extends TriggerProps {}

export interface SubContentProps {
  children: React.ReactNode;
  isSubOpen: boolean;
}
