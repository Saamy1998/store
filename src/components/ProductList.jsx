import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-lg bg-white">
          <img src={product.image} alt={product.title} className="h-40 mx-auto mb-4" />
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-green-600 font-bold">${product.price}</p>
          <button 
            onClick={() => addToCart(product)} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 w-full"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
