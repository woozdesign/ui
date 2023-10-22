/// <reference types="react" />
import { BasePropWithChildren, DisplayProp, LayoutProp, MarginProp, PaddingProp, SpaceValue } from '../../utils';
export interface FlexProps extends BasePropWithChildren, LayoutProp, DisplayProp, MarginProp, PaddingProp {
    align?: React.CSSProperties['alignItems'];
    justify?: React.CSSProperties['justifyContent'];
    direction?: 'row' | 'column';
    space?: SpaceValue;
}
