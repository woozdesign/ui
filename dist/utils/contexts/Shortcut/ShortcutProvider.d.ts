import React, { FC } from 'react';
import { WoozCommandCode } from './Shortcut.props';
export type Shortcut = {
    keys: WoozCommandCode[];
    action: () => void;
};
type ShortcutContextValue = {
    shortcuts: Shortcut[];
    registerShortcut: (shortcut: Shortcut) => void;
    unregisterShortcut: (keys: WoozCommandCode[]) => void;
};
export declare const ShortcutContext: React.Context<ShortcutContextValue | undefined>;
export declare const ShortcutProvider: FC<React.PropsWithChildren>;
export {};
