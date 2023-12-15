/// <reference types="react" />
import { BorderWidthProp, ColorProp, MarginProp, SizeProp } from '../../utils';
export type ItemProps = {
    id: string;
    label: string;
    iconPrepend?: React.ReactNode;
    iconAppend?: React.ReactNode;
    children?: ItemProps[];
};
export interface TreeProps extends MarginProp, SizeProp, ColorProp, BorderWidthProp {
    items: ItemProps[];
}
export interface TreeItemComponentProps {
    item: ItemProps;
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
