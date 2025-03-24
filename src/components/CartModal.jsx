import React from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";

Modal.setAppElement("#root");

const CartModal = ({ isOpen, onClose, cart, removeFromCart, updateQuantity }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-white p-6 rounded-lg shadow-xl max-w-lg mx-auto mt-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h2 className="text-xl font-bold mb-4 text-center">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <ul className="space-y-4">
            {cart.map((item) => (
              <motion.li 
                key={item.id} 
                className="flex items-center gap-4 border-b pb-4"
                whileHover={{ scale: 1.02 }}
              >
                <img src={item.image} alt={item.title} className="h-16 w-16 rounded-lg" />
                <div className="flex-1">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-green-600 font-bold">${item.price}</p>
                  
                  <div className="flex items-center mt-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded-md">
                      ➖
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded-md">
                      ➕
                    </button>
                  </div>
                </div>

                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg">
                  Remove
                </button>
              </motion.li>
            ))}
          </ul>

          <div className="text-right mt-4">
            <p className="text-lg font-semibold">Total: <span className="text-green-600">${totalPrice}</span></p>
          </div>
        </motion.div>
      )}

      <button onClick={onClose} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg w-full">
        Close
      </button>
    </Modal>
  );
};

export default CartModal;
