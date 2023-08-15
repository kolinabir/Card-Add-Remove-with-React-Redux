import {
  ADDED,
  ADDED_TO_CART,
  DECREASE_PRODUCT_QUANTITY,
  INCREASE_PRODUCT_QUANTITY,
  REMOVED_FROM_CART,
} from "./actionTypes";
import { initialState } from "./initialState";

const nextProductId = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(product.id, maxId),
    -1
  );
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextProductId(state),
          name: action.payload.name,
          price: action.payload.price,
          quantity: action.payload.quantity,
          image: action.payload.image,
          cartAdded: false,
          cartQuantity: 0,
        },
      ];
    case ADDED_TO_CART:
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, cartAdded: true, cartQuantity: 1 }
          : product
      );
    case REMOVED_FROM_CART:
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, cartAdded: false, cartQuantity: 0 }
          : product
      );
    case INCREASE_PRODUCT_QUANTITY:
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, cartQuantity: product.cartQuantity + 1 }
          : product
      );
    case DECREASE_PRODUCT_QUANTITY:
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, cartQuantity: product.cartQuantity - 1 }
          : product
      );

    default:
      return state;
  }
};

export default reducer;
