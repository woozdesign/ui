import { ColorProp, MarginProp, RadiusProp, SizeProp } from '../../utils';
export interface AvatarProps extends SizeProp, ColorProp, RadiusProp, MarginProp {
    src?: string;
    fallback: string;
}
