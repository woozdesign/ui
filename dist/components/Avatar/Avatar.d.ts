import { FC } from 'react';
import { ColorProp, RadiusProp, SizeProp } from '../../utils';
export interface AvatarProps extends SizeProp, ColorProp, RadiusProp {
    src?: string;
    fallback: string;
}
declare const Avatar: FC<AvatarProps>;
export default Avatar;
