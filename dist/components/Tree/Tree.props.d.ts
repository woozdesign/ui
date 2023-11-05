export type TreeItemProps = {
    id: string;
    label: string;
    children?: TreeItemProps[];
    level?: number;
};
export type TreeProps = {
    data: TreeItemProps[];
};
