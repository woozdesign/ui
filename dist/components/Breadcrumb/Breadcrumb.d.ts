import React, { FC } from 'react';
import { ColorProp } from '../../utils';
export type BreadcrumbItem = {
    key: string;
    href: string;
    title: string;
    active: boolean;
};
interface BreadcrumbProps extends ColorProp {
    items: BreadcrumbItem[];
    divider?: React.ReactNode;
    highContrast?: boolean;
}
declare const Breadcrumb: FC<BreadcrumbProps>;
export default Breadcrumb;