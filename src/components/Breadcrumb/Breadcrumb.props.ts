import { ColorProp, HighContrastProp } from '@/utils';

export type BreadcrumbItem = {
  key: string;
  href: string;
  title: string;
  active: boolean;
};

export interface BreadcrumbProps extends ColorProp, HighContrastProp {
  items: BreadcrumbItem[];
  variant?: 'normal' | 'inverse';
  divider?: React.ReactNode;
}
