import { RefObject, useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    if (!isBrowser) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};
