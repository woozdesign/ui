import { BasePropWithChildren } from '../../utils';
export interface TooltipProps extends BasePropWithChildren {
    content: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
}
