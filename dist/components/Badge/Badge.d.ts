import { FC } from 'react';
import { ColorProp, HighContrastProp, RadiusProp, SizeProp } from '../../utils';
interface BadgeProps extends ColorProp, SizeProp, RadiusProp, HighContrastProp {
    variant?: 'solid' | 'ghost' | 'outlined';
    label: string | number;
}
declare const Badge: FC<BadgeProps>;
export default Badge;
