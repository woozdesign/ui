import React from 'react';
import { ColorProp, SizeProp } from '../../utils';
import { WoozCommandCode } from '../../utils/contexts/Shortcut/Shortcut.props';
interface KbdProps extends ColorProp, SizeProp {
    variant?: 'solid' | 'soft';
    shortcut: WoozCommandCode[];
}
declare const Kbd: React.FC<KbdProps>;
export default Kbd;
