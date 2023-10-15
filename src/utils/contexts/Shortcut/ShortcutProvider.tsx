import React, { FC, createContext, useCallback, useEffect, useRef, useState } from 'react';
import { KEY_CODES, WoozCommandCode } from './Shortcut.props';

export type Shortcut = {
  keys: WoozCommandCode[];
  action: () => void;
};

type ShortcutContextType = {
  shortcuts: Shortcut[];
  registerShortcut: (shortcut: Shortcut) => void;
  unregisterShortcut: (keys: WoozCommandCode[]) => void;
};

export const ShortcutContext = createContext<ShortcutContextType | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isSetsEqual = (a: Set<any>, b: Set<any>) => {
  if (a.size !== b.size) return false;
  for (const item of a) if (!b.has(item)) return false;
  return true;
};

export const ShortcutProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);
  const currentlyPressedKeysRef = useRef<Set<WoozCommandCode>>(new Set());
  const shortcutsRef = useRef<Shortcut[]>([]);

  useEffect(() => {
    console.log('shortcuts: ', shortcuts);
    shortcutsRef.current = shortcuts;
  }, [shortcuts]);

  const registerShortcut = useCallback((shortcut: Shortcut) => {
    console.log('registerShortcut: ', shortcut);
    setShortcuts([...shortcuts, shortcut]);
  }, []);

  const unregisterShortcut = useCallback(
    (keys: WoozCommandCode[]) => {
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
    },
    [setShortcuts],
  );
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!event.metaKey) {
      const key = keyboardEventToWoozCommand(event);
      if (key) {
        currentlyPressedKeysRef.current.add(key);
        const matchingShortcut = [...shortcutsRef.current].reverse().find((s) => isSetsEqual(new Set(s.keys), currentlyPressedKeysRef.current));

        if (matchingShortcut) {
          matchingShortcut.action();
          event.preventDefault();
        }
      }
    }
  }, []);

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

  return <ShortcutContext.Provider value={{ shortcuts, registerShortcut, unregisterShortcut }}>{children}</ShortcutContext.Provider>;
};

const keyboardEventToWoozCommand = (event: KeyboardEvent): WoozCommandCode | undefined => {
  const key = KEY_CODES[event.keyCode];
  if (key) return key as WoozCommandCode;
};
