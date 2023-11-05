import { ColorProp, MarginProp, SizeProp } from '@/utils';

// Extend TreeItemProps to accept an optional level prop
export type TreeItemProps = {
  id: string;
  label: string;
  children?: TreeItemProps[];
  level?: number;
};
// Define the type for the tree component props
export interface TreeProps extends MarginProp, SizeProp, ColorProp {
  data: TreeItemProps[];
}
