import React, { useState, useCallback, useEffect, FC, createContext, useRef } from 'react';
import { Shortcut, ShortcutContext } from './ShortcutContext';
import { KEY_CODES, WoozCommandCode } from './Shortcut.props';

const isSetsEqual = (a: Set<T>, b: Set<T>) => {
  if (a.size !== b.size) return false;
  for (const item of a) if (!b.has(item)) return false;
  return true;
};

const isMac = navigator.platform.toUpperCase().includes('MAC');

export const ShortcutProvider: FC = ({ children }) => {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);
  const currentlyPressedKeysRef = useRef<Set<WoozCommandCode>>(new Set());

  const registerShortcut = useCallback((shortcut: Shortcut) => {
    setShortcuts((prev) => {
      return [...prev, shortcut];
    });
  }, []);

  const unregisterShortcut = useCallback((keys: WoozCommandCode[]) => {
    setShortcuts((prev) => {
      // Find the last (top) shortcut with the matching keys
      for (let i = prev.length - 1; i >= 0; i--) {
        if (isSetsEqual(new Set(prev[i].keys), new Set(keys))) {
          // Remove the top shortcut with the matching keys
          const updatedShortcuts = [...prev];
          updatedShortcuts.splice(i, 1);
          return updatedShortcuts;
        }
      }
      return prev;
    });
  }, []);
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!event.metaKey) {
        const key = keyboardEventToWoozCommand(event);
        if (key) {
          currentlyPressedKeysRef.current.add(key);

          const matchingShortcut = [...shortcuts].reverse().find((s) => isSetsEqual(new Set(s.keys), currentlyPressedKeysRef.current));
          if (matchingShortcut) {
            matchingShortcut.action();
            event.preventDefault();
          }
        }
      }
    },
    [shortcuts],
  );

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    const key = keyboardEventToWoozCommand(event);
    if (key) {
      if (key === 'Meta') {
        currentlyPressedKeysRef.current.clear();
      } else {
        setTimeout(() => {
          currentlyPressedKeysRef.current.delete(key);
        }, 10); // A short delay to ensure all keyup events are processed
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return <ShortcutContext.Provider value={{ registerShortcut, unregisterShortcut }}>{children}</ShortcutContext.Provider>;
};

const keyboardEventToWoozCommand = (event: KeyboardEvent): WoozCommandCode | undefined => {
  const key = KEY_CODES[event.keyCode];
  if (key) return key as WoozCommandCode;
};

export const useShortcuts = () => {
  const context = useContext(ShortcutContext);
  if (!context) {
    throw new Error('useShortcuts must be used within a ShortcutProvider');
  }
  return context;
};
