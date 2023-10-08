import { FC } from 'react';
import { ColorProp, RadiusProp, SizeProp } from '../../utils';
interface BadgeProps extends ColorProp, SizeProp, RadiusProp {
    variant?: 'solid' | 'soft' | 'outlined';
    label: string | number;
    highContrast?: boolean;
}
declare const Badge: FC<BadgeProps>;
export default Badge;
