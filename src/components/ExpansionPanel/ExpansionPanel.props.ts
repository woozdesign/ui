import { ColorProp, RadiusProp } from '@/utils';

export interface ExpansionItem {
  header: React.ReactNode;
  children: React.ReactNode;
}

export interface ExpansionPanelProps extends ColorProp, RadiusProp {
  items: ExpansionItem[];
  outlined?: boolean;
  multiple?: boolean;
}
