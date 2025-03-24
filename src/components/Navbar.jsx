import React from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center fixed top-0 w-full shadow-md z-50">
      <h1 className="text-xl font-bold">🛍️ Aravind's Store</h1>
      <button onClick={onCartClick} className="relative bg-white text-blue-600 px-4 py-2 rounded-lg">
        Cart 🛒
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
