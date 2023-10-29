import { BasePropWithChildren, ColorProp, HighContrastProp, MarginProp, RadiusProp, ShadowProp, SizeProp } from '@/utils';

export interface SelectContextProps {
  selectedValue: string;
  selectedLabel: string; // Add this line
  setSelectedValue: (value: string) => void;
  setSelectedLabel: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export interface RootProps extends BasePropWithChildren, HighContrastProp, MarginProp, SizeProp, ShadowProp, RadiusProp, ColorProp {
  variant?: 'solid' | 'ghost' | 'outlined' | 'transparent';
  defaultValue?: string;
  placeholder?: string;
}

export interface TriggerProps {}

export interface ContentProps extends BasePropWithChildren {
  placement?: 'top' | 'bottom' | 'left' | 'right';
}
export interface ItemProps extends BasePropWithChildren {
  value: string;
}
