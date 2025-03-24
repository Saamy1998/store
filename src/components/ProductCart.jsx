import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product, addToCart, cart }) => {
  // Check if the product is already in the cart
  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <motion.div 
      className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
      whileHover={{ scale: 1.05 }}
    >
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="text-md font-semibold mt-2">{product.title}</h2>
      <p className="text-green-600 font-bold">${product.price}</p>

      {/* Show quantity if the product is in the cart */}
      {quantity > 0 && (
        <p className="text-sm text-gray-600 mt-1">In Cart: {quantity}</p>
      )}

      <button 
        onClick={() => addToCart(product)}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
      >
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCard;
