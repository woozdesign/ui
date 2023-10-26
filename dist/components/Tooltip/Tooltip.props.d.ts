import { BasePropWithChildren } from '../../utils';
export interface TooltipProps extends BasePropWithChildren {
    content: string;
    placement?: 'top' | 'bottom' | 'left' | 'right';
}
