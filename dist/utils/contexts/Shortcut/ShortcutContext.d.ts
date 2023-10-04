import React from 'react';
import { WoozCommandCode } from './Shortcut.props';
export type Shortcut = {
    keys: WoozCommandCode[];
    action: () => void;
};
type ShortcutContextType = {
    registerShortcut: (shortcut: Shortcut) => void;
    unregisterShortcut: (keys: WoozCommandCode[]) => void;
};
export declare const ShortcutContext: React.Context<ShortcutContextType | undefined>;
export declare const useShortcuts: () => ShortcutContextType;
export {};
