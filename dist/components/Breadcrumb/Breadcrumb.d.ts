import { ColorProp, HighContrastProp } from '../../utils';
import React, { FC } from 'react';
export type BreadcrumbItem = {
    key: string;
    href: string;
    title: string;
    active: boolean;
};
interface BreadcrumbProps extends ColorProp, HighContrastProp {
    items: BreadcrumbItem[];
    divider?: React.ReactNode;
}
declare const Breadcrumb: FC<BreadcrumbProps>;
export default Breadcrumb;
