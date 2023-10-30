import { BasePropWithChildren, ColorProp, MarginProp, PaddingProp, RadiusProp, SizeProp } from '../../utils';
export interface ScrollAreaProps extends MarginProp, PaddingProp, BasePropWithChildren, RadiusProp, ColorProp, SizeProp {
    id: string;
    type?: 'always' | 'auto';
    direction?: 'vertical' | 'horizontal';
    persistent?: boolean;
    invisible?: boolean;
}
