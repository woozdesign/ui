import { ColorProp, MarginProp, SizeProp } from '@/utils';
import { WoozCommandCode } from '@/utils/contexts/Shortcut/Shortcut.props';

export interface KbdProps extends MarginProp, ColorProp, SizeProp {
  variant?: 'solid' | 'ghost';
  shortcut: WoozCommandCode[];
}
