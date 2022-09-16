import React, { useReducer, useMemo, createContext } from "react";
import {
  Store,
  SelectedProductsReducer,
  initialState,
} from "./selectedProducts";
import type { Action } from "../actions/actions";

type ProviderProps = {
  children: React.ReactNode;
};

type Context = {
  state: Store;
  dispatch: React.Dispatch<Action>;
};

export const SelectedProductsContext = createContext<Context>({} as Context);

export const SelectedProductsProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer<React.Reducer<Store, Action>>(
    SelectedProductsReducer,
    initialState,
  );

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <SelectedProductsContext.Provider value={contextValue}>
      {children}
    </SelectedProductsContext.Provider>
  );
};
