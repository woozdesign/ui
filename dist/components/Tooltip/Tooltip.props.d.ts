import { BasePropWithChildren } from '../../utils';
export interface TooltipProps extends BasePropWithChildren {
    label: string;
    placement?: 'top' | 'bottom' | 'left' | 'right';
}
