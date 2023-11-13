// CartPage.jsx
import React from 'react';
import { useAuth } from '../context/useAuth'; // Import your authentication context or use the appropriate way to manage user state

const CartPage = () => {
  const { user } = useAuth(); 

  
  const cartItems = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    // Add more items as needed
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {user ? (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
        </>
      ) : (
        <p>Please log in to view your cart.</p>
      )}
    </div>
  );
};

export default CartPage;

