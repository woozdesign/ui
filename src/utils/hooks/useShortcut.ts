import React from 'react';
import { useShortcuts } from '../contexts/Shortcut/ShortcutContext';
import { WoozCommandCode } from '../contexts/Shortcut/Shortcut.props';

export const useShortcut = (keys: WoozCommandCode[], action: () => void) => {
  const { registerShortcut, unregisterShortcut } = useShortcuts();

  // Use refs to track the previous values of keys and action
  const prevKeysRef = React.useRef<WoozCommandCode[]>();
  const prevActionRef = React.useRef<() => void>();

  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return; // If not, just exit from the effect
    }

    // Check if keys or action have changed
    const keysChanged = JSON.stringify(prevKeysRef.current) !== JSON.stringify(keys);
    const actionChanged = prevActionRef.current !== action;

    if (keysChanged || actionChanged) {
      // If keys have changed, unregister the previous shortcut
      if (keysChanged && prevKeysRef.current) {
        unregisterShortcut(prevKeysRef.current);
      }

      // Register the new shortcut
      if (keys && keys.length > 0) {
        const shortcut = { keys, action };
        registerShortcut(shortcut);
      }

      // Update the refs with the current values
      prevKeysRef.current = keys;
      prevActionRef.current = action;
    }

    // Cleanup: unregister the shortcut when the component unmounts
    return () => {
      if (keys && keys.length > 0) {
        unregisterShortcut(keys);
      }
    };
  }, []);
};
