import { ColorProp, MarginProp, SizeProp } from '../../utils';
export type TreeItemProps = {
    id: string;
    label: string;
    children?: TreeItemProps[];
    level?: number;
};
export interface TreeProps extends MarginProp, SizeProp, ColorProp {
    data: TreeItemProps[];
}
