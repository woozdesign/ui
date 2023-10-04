import React, { FC } from 'react';
import { Shortcut } from './ShortcutContext';
import { WoozCommandCode } from './Shortcut.props';
export declare const ShortcutProvider: FC<React.PropsWithChildren>;
export declare const useShortcuts: () => {
    registerShortcut: (shortcut: Shortcut) => void;
    unregisterShortcut: (keys: WoozCommandCode[]) => void;
};
