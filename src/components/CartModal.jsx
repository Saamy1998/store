import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CartModal = ({ isOpen, onClose, cart, removeFromCart }) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto mt-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">No items in cart.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b py-2">
              <span>{item.title}</span>
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <button 
        onClick={onClose} 
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg w-full"
      >
        Close
      </button>
    </Modal>
  );
};

export default CartModal;
