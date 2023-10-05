import React from 'react';
import { ColorProp } from '../../utils';
import { WoozCommandCode } from '../../utils/contexts/Shortcut/Shortcut.props';
interface KbdProps extends ColorProp {
    variant?: 'primary' | 'secondary';
    shortcut: WoozCommandCode[];
}
declare const Kbd: React.FC<KbdProps>;
export default Kbd;
