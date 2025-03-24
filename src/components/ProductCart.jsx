import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product, addToCart }) => {
  return (
    <motion.div 
      className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
      whileHover={{ scale: 1.05 }}
    >
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="text-md font-semibold mt-2">{product.title}</h2>
      <p className="text-green-600 font-bold">${product.price}</p>
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
