/// <reference types="react" />
import { SizeProp, ColorProp, RadiusProp, HighContrastProp, MarginProp } from '../../utils';
export interface IconMenuContextProps {
    activeItem: string;
    setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}
export interface MenuItem extends SizeProp, ColorProp, RadiusProp, HighContrastProp {
    label: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    href?: string;
}
export interface MenuItemProps extends Omit<MenuItem, 'value'> {
    value: string;
}
export type MenuProps = {
    items?: MenuItemProps[];
    defaultValue: string;
    justify?: 'start' | 'center' | 'end';
    children: React.ReactNode;
} & MarginProp & SizeProp & ColorProp & RadiusProp & HighContrastProp;
