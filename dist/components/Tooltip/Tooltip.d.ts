import { FC, ReactNode } from 'react';
interface TooltipProps {
    content: string;
    position?: 'top' | 'bottom';
    children: ReactNode;
}
declare const Tooltip: FC<TooltipProps>;
export default Tooltip;
