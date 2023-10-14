import { ColorProp, SizeProp } from '@/utils';
import { WoozCommandCode } from '@/utils/contexts/Shortcut/Shortcut.props';

export interface KbdProps extends ColorProp, SizeProp {
  variant?: 'solid' | 'ghost';
  shortcut: WoozCommandCode[];
}
