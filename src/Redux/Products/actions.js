import {
  ADDED,
  ADDED_TO_CART,
  DECREASE_PRODUCT_QUANTITY,
  INCREASE_PRODUCT_QUANTITY,
  REMOVED_FROM_CART,
} from "./actionTypes";

export const added = (product) => {
  return {
    type: ADDED,
    payload: product,
  };
};

export const addedToCart = (productId) => {
  return {
    type: ADDED_TO_CART,
    payload: productId,
  };
};

export const removedFromCart = (productId) => {
  return {
    type: REMOVED_FROM_CART,
    payload: productId,
  };
};

export const increaseProductQuantity = (productId) => {
  return {
    type: INCREASE_PRODUCT_QUANTITY,
    payload: productId,
  };
};

export const decreseProductQuantity = (productId) => {
  return {
    type: DECREASE_PRODUCT_QUANTITY,
    payload: productId,
  };
};
