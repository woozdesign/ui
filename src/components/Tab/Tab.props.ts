import { BasePropWithChildren, ColorProp, HighContrastProp, MarginProp, RadiusProp, SizeProp } from '@/utils';
import React from 'react';

export interface TabContextProps {
  id: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
export interface RootProps extends BasePropWithChildren, MarginProp {
  defaultValue: string;
}

export interface TriggerProps extends BasePropWithChildren, MarginProp, ColorProp, SizeProp, RadiusProp, HighContrastProp {
  value: string;
  onClick?: () => void;
}

export interface ListProps extends BasePropWithChildren {
  justify?: 'center' | 'end' | 'space-between' | 'start';
}

export interface ContentProps extends BasePropWithChildren {
  value: string;
}
