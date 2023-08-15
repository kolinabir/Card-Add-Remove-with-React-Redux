import React from "react";
import { useDispatch } from "react-redux";
import { addedToCart } from "../Redux/Products/actions";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    console.log("clijked");
    dispatch(addedToCart(product.id));
  };
  return (
    <div>
      <div className="lws-productCard">
        <img className="lws-productImage" src={product.image} alt="product" />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{product.name}</h4>
          <p className="lws-productCategory">{product.category}</p>

          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">{product.price}</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">{product.quantity}</span>
            </p>
          </div>

          <button
            disabled={product.cartQuantity > 0}
            onClick={handleAddToCart}
            className="lws-btnAddToCart"
          >
            {product.cartQuantity > 0 ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
