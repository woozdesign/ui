import { BasePropWithChildren, ColorProp } from '../../utils';
export type SplitPaneProps = BasePropWithChildren & ColorProp & {
    split: 'vertical' | 'horizontal';
    allowResize: boolean;
    minSize: number;
};
