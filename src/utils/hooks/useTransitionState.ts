// useTransitionState.js
import { useState, useEffect } from 'react';

export const useTransitionState = (initialState: boolean, transitionDuration: number) => {
  const [isTransitioningIn, setIsTransitioningIn] = useState(initialState);
  const [isRendered, setIsRendered] = useState(initialState);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!initialState) {
      setIsTransitioningIn(false);
      // Set a timer to delay unmounting
      timer = setTimeout(() => setIsRendered(false), transitionDuration);
    } else {
      // Set rendered state before starting the transition
      setIsRendered(true);
      // Set a timer to delay the transition
      timer = setTimeout(() => setIsTransitioningIn(true), transitionDuration);
    }

    // Clear the timer if the component unmounts or if the state changes before the timeout completes
    return () => clearTimeout(timer);
  }, [initialState, transitionDuration]);

  return [isTransitioningIn, isRendered];
};
