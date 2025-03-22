import React from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Fake Store</h1>
      <button 
        onClick={onCartClick} 
        className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
