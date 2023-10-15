import React, { useContext } from 'react';
import { ShortcutContext } from '../contexts';
import { WoozCommandCode } from '../contexts/Shortcut/Shortcut.props';

export const useShortcut = (keys: WoozCommandCode[], action: () => void) => {
  const context = useContext(ShortcutContext);
  if (!context) {
    throw new Error('useShortcuts must be used within a ShortcutProvider');
  }
  // Use refs to track the previous values of keys and action
  const prevKeysRef = React.useRef<WoozCommandCode[]>();
  const prevActionRef = React.useRef<() => void>();

  React.useEffect(() => {
    // Check if keys or action have changed
    const keysChanged = JSON.stringify(prevKeysRef.current) !== JSON.stringify(keys);
    const actionChanged = prevActionRef.current !== action;

    if (keysChanged || actionChanged) {
      // If keys have changed, unregister the previous shortcut
      if (keysChanged && prevKeysRef.current) {
        context.unregisterShortcut(prevKeysRef.current);
      }

      // Register the new shortcut
      if (keys && keys.length > 0) {
        const shortcut = { keys, action };
        context.registerShortcut(shortcut);
      }

      // Update the refs with the current values
      prevKeysRef.current = keys;
      prevActionRef.current = action;
    }

    // Cleanup: unregister the shortcut when the component unmounts
    return () => {
      if (keys && keys.length > 0) {
        context.unregisterShortcut(keys);
      }
    };
  }, []);
};
