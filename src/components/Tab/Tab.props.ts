import { ColorProp, HighContrastProp, RadiusProp, SizeProp } from '@/utils';
import React from 'react';

export interface TabContextProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
export interface RootProps {
  children: React.ReactNode;
  defaultValue: string;
}

export interface TriggerProps extends ColorProp, SizeProp, RadiusProp, HighContrastProp {
  value: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export interface ListProps {
  justify?: 'center' | 'end' | 'space-between' | 'start';
  children: React.ReactNode;
}

export interface ContentProps {
  value: string;
  children: React.ReactNode;
}
