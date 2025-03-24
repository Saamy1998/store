import React from "react";
import ProductCard from "./ProductCart";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
