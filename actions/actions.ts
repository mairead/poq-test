export const add_product = (
  productId: number,
): {
  type: "ADD_PRODUCT";
  payload: {
    productId: number;
  };
} => ({
  type: "ADD_PRODUCT",
  payload: {
    productId,
  },
});

export const remove_product = (
  productId: number,
): {
  type: "REMOVE_PRODUCT";
  payload: {
    productId: number;
  };
} => ({
  type: "REMOVE_PRODUCT",
  payload: {
    productId,
  },
});

export type Action =
  | ReturnType<typeof add_product>
  | ReturnType<typeof remove_product>;
