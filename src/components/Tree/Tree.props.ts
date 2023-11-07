import { ColorProp, MarginProp, SizeProp } from '@/utils';

// Extend TreeItemProps to accept an optional level prop
export type TreeItemProps = {
  id: string;
  label: string;
  children?: TreeItemProps[];
};
// Define the type for the tree component props
export interface TreeProps extends MarginProp, SizeProp, ColorProp {
  data: TreeItemProps[];
}

export interface TreeItemComponentProps {
  item: TreeItemProps;
  level?: number;
  onDragStart: (e: React.DragEvent<HTMLLIElement>, id: string) => void;
  onDragOver: (e: React.DragEvent<HTMLLIElement>, id: string) => void;
  onDrop: (e: React.DragEvent<HTMLLIElement>, id: string) => void;
  onDragEnter: (e: React.DragEvent<HTMLLIElement>, id: string) => void;
  onDragLeave: (e: React.DragEvent<HTMLLIElement>) => void;
  onDragEnd: (e: React.DragEvent<HTMLLIElement>) => void;
  hoveredItemId?: string;
  isFirstChild?: boolean;
  dragOverItemId?: string;
  dragOverPosition?: 'above' | 'below';
}
