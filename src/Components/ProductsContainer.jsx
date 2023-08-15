import React from "react";
import ProductsShow from "./ProductsShow";
import ProductInput from "./ProductInput";

const ProductsContainer = () => {
  return (
    <div>
      <main className="py-16">
        <div className="productWrapper">
          <ProductsShow></ProductsShow>

          <div>
            <ProductInput></ProductInput>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsContainer;
