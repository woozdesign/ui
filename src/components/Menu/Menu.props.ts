import { SizeProp, ColorProp, RadiusProp, HighContrastProp, MarginProp } from '@/utils';

export interface MenuContextProps {
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

export interface MenuItem extends SizeProp, ColorProp, RadiusProp, HighContrastProp {
  label: React.ReactNode;
  onClick?: () => void;
  href?: string;
  iconPrepend?: React.ReactNode;
  iconAppend?: React.ReactNode;
}

export interface MenuItemProps extends Omit<MenuItem, 'value'> {
  value?: string;
}

export interface MenuProps extends MarginProp, SizeProp, ColorProp, RadiusProp, HighContrastProp {
  items: MenuItemProps[];
  defaultValue: string;
  justify?: 'start' | 'center' | 'end';
}
