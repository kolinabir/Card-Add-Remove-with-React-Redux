import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const ProductsShow = () => {
  const products = useSelector((state) => state);
  return (
    <div>
      {" "}
      {/* products container */}
      <div className="productContainer" id="lws-productContainer">
        {products.map((product) => (
          <ProductItem product={product} key={product.id}></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default ProductsShow;
