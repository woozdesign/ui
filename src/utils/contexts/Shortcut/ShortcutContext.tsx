import React, { createContext, useContext, useCallback } from 'react';
import { WoozCommandCode } from './Shortcut.props';

export type Shortcut = {
  keys: WoozCommandCode[];
  action: () => void;
};

type ShortcutContextType = {
  registerShortcut: (shortcut: WoozCommandCode[]) => void;
  unregisterShortcut: (keys: string[]) => void;
};

export const ShortcutContext = createContext<ShortcutContextType | undefined>(undefined);

export const useShortcuts = () => {
  const context = useContext(ShortcutContext);
  if (!context) {
    throw new Error('useShortcuts must be used within a ShortcutProvider');
  }
  return context;
};
