import React, { createContext, useContext, useCallback } from 'react';
import { WoozCommandCode } from './Shortcut.props';

export type Shortcut = {
  keys: WoozCommandCode[];
  action: () => void;
};

type ShortcutContextType = {
  registerShortcut: (shortcut: Shortcut) => void;
  unregisterShortcut: (keys: WoozCommandCode[]) => void;
};

export const ShortcutContext = createContext<ShortcutContextType | undefined>(undefined);

export const useShortcuts = () => {
  const context = useContext(ShortcutContext);
  if (!context) {
    throw new Error('useShortcuts must be used within a ShortcutProvider');
  }
  return context;
};
