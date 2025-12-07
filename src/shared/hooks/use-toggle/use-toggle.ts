import { useState, useCallback } from 'react';

interface ToggleState {
  state: boolean;
  on: () => void;
  off: () => void;
  toggle: () => void;
}

export const useToggle = (initialState: boolean = false): ToggleState => {
  const [state, setState] = useState(initialState);

  const on = useCallback(() => setState(true), []);

  const off = useCallback(() => setState(false), []);

  const toggle = useCallback(() => setState(prev => !prev), []);

  return { state, on, off, toggle };
};
