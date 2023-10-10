import { ColorProp, SizeProp } from '../../utils';
import { WoozCommandCode } from '../../utils/contexts/Shortcut/Shortcut.props';
import React from 'react';
interface KbdProps extends ColorProp, SizeProp {
    variant?: 'solid' | 'ghost';
    shortcut: WoozCommandCode[];
}
declare const Kbd: React.FC<KbdProps>;
export default Kbd;
