import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Card.css";

const Card = () => {
  const [cart, setCart] = useState([]);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleIncrement = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

  const totalPrice = cart.reduce(
    (total, item) => Math.floor(total + item.price * item.quantity),
    0
  );

  return (
    <>
      <Header />
      <section className="cart-section">
        <h1 className="cart-title">Your Shopping Cart</h1>

        <div className="cart-container">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name || item.title}
                  className="cart-img"
                />
                <div className="cart-info">
                  <h3>{item.name || item.title}</h3>
                  <p>Price: Rs. {item.price}</p>

                  <div className="quantity-box">
                    <button onClick={() => handleDecrement(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.id)}>+</button>
                  </div>

                  <p className="item-total">
                    Total: Rs. {Math.floor(item.price * item.quantity)}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <p>Total Items: {cart.length}</p>
            <p className="grand-total">Grand Total: Rs. {totalPrice}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Card;
