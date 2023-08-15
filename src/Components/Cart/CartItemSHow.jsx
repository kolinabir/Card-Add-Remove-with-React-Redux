import React from "react";
import { useDispatch } from "react-redux";
import {
  decreseProductQuantity,
  increaseProductQuantity,
  removedFromCart,
} from "../../Redux/Products/actions";

const CartItemSHow = ({ product }) => {
  const dispatch = useDispatch();
  const handleIncrese = () => {
    if (product.quantity === product.cartQuantity) {
      return;
    } else {
      dispatch(increaseProductQuantity(product.id));
    }
  };
  const handleDecrese = () => {
    if (product.cartQuantity === 0) {
      return;
    } else {
      dispatch(decreseProductQuantity(product.id));
    }
  };
  const deleteProductFromCart = () => {
    dispatch(removedFromCart(product.id));
  };
  return (
    <div>
      {/* Cart Item */}

      <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">
          {/* cart image */}

          <img className="lws-cartImage" src={product.image} alt="product" />

          {/* cart item info */}

          <div className="space-y-2">
            <h4 className="lws-cartName">{product.name}</h4>

            <p className="lws-cartCategory">{product.category}</p>

            <p>
              BDT <span className="lws-cartPrice">{product.price}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          {/* amount buttons */}

          <div className="flex items-center space-x-4">
            <button onClick={handleIncrese} className="lws-incrementQuantity">
              <i className="text-lg fa-solid fa-plus"></i>
            </button>

            <span className="lws-cartQuantity">{product.cartQuantity}</span>

            <button onClick={handleDecrese} className="lws-decrementQuantity">
              <i className="text-lg fa-solid fa-minus"></i>
            </button>
          </div>

          {/* price */}

          <p className="text-lg font-bold">
            BDT{" "}
            <span className="lws-calculatedPrice">
              {product.price * product.cartQuantity}
            </span>
          </p>
        </div>

        {/* delete button */}

        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button
            onClick={deleteProductFromCart}
            className="lws-removeFromCart"
          >
            <i className="text-lg text-red-400 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>

      {/* Cart Items Ends */}
    </div>
  );
};

export default CartItemSHow;
