import { useLayoutEffect } from "react";
import create from "zustand";
import createContext from "zustand/context";

let store;

const initialState = {
  searchString: "",
};

const zustandContext = createContext();
export const Provider = zustandContext.Provider;
export const useStore = zustandContext.useStore;

export const initializeStore = (preloadedState = {}) => {
  return create((set, get) => ({
    ...initialState,
    ...preloadedState,
    update: searchString => {
      set({
        searchString,
      });
    },
    reset: () => {
      set({
        searchString: initialState.searchString,
      });
    },
  }));
};

export function useCreateStore(initialState) {
  // For SSR & SSG, always use a new store.
  if (typeof window === "undefined") {
    return () => initializeStore(initialState);
  }

  // For CSR, always re-use same store.
  store = store ?? initializeStore(initialState);
  // And if initialState changes, then merge states in the next render cycle.
  //
  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    if (initialState && store) {
      store.setState({
        ...store.getState(),
        ...initialState,
      });
    }
  }, [initialState]);

  return () => store;
}
