import { ColorProp, HighContrastProp, MarginProp, RadiusProp, ShadowProp, SizeProp } from '../../utils';
export interface PaginationProps extends ColorProp, HighContrastProp, RadiusProp, SizeProp, MarginProp, ShadowProp {
    totalRecords: number;
    recordsPerPage: number;
    onPageChanged: (pageNumber: number) => void;
    currentPage: number;
    showPageCount?: number;
    variant?: 'outlined' | 'solid';
}
