import React, { FC } from 'react';
import { SpaceSizeProp } from '../../utils';
interface FlexProps extends SpaceSizeProp {
    width: React.CSSProperties['width'];
    height: React.CSSProperties['height'];
    align: React.CSSProperties['alignItems'];
    justify: React.CSSProperties['justifyContent'];
    direction?: 'rows' | 'col';
    children: React.ReactNode;
}
declare const Flex: FC<FlexProps>;
export default Flex;
