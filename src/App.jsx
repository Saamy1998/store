import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    document.title = "Aravind's store"
    axios.get("https://fakestoreapi.com/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div>
      <Navbar cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
      <ProductList products={products} addToCart={addToCart} />
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        removeFromCart={removeFromCart} 
      />
    </div>
  );
};

export default App;
