/// <reference types="react" />
import { ColorProp, HighContrastProp, MarginProp } from '../../utils';
export type BreadcrumbItem = {
    key: string;
    href: string;
    title: string;
    active: boolean;
};
export interface BreadcrumbProps extends MarginProp, ColorProp, HighContrastProp {
    items: BreadcrumbItem[];
    variant?: 'normal' | 'inverse';
    divider?: React.ReactNode;
}
