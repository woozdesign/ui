import { BaseProp, BasePropWithChildren, BorderWidthProp, ColorProp, HighContrastProp, MarginProp, RadiusProp, ShadowProp, SizeProp } from '../../utils';
export interface SelectContextProps {
    open: boolean;
    isRendered: boolean;
    selectedValue: string;
    selectedLabel: string;
    setSelectedValue: (value: string) => void;
    setSelectedLabel: (value: string) => void;
    isOpen: boolean;
    onToggle: () => void;
}
export interface RootProps extends BasePropWithChildren, HighContrastProp, MarginProp, SizeProp, ShadowProp, RadiusProp, ColorProp, BorderWidthProp {
    variant?: 'solid' | 'ghost' | 'outlined' | 'transparent';
    defaultValue?: string;
    placeholder?: string;
}
export interface TriggerProps {
}
export interface ContentProps extends BaseProp {
    placement?: 'top' | 'bottom' | 'left' | 'right';
    items: ItemProps[];
}
export interface ItemProps {
    value: string;
    label: string;
}
