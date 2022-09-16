import type { Action } from "../actions/actions";

export const initialState = {
  selectedProducts: <Array<number>>[],
};

export const ACTIONS = {
  ADD_PRODUCT: "add_product",
  REMOVE_PRODUCT: "remove_product",
};

export type Store = typeof initialState;

export const SelectedProductsReducer = (state: Store, action: Action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.payload.productId],
      };
    case ACTIONS.REMOVE_PRODUCT:
      return {
        ...state,
        selectedProducts: state.selectedProducts.filter(
          (e) => e !== action.payload.productId,
        ),
      };
    default:
      return initialState;
  }
};
