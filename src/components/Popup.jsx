import React from "react";
import { Link } from "react-router-dom";
import "../css/Popup.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        <h2>✅ Product Added to Cart!</h2>
        <p>You can view it in your cart page.</p>

        <div className="modal-buttons">
          <Link to="/cart" className="go-cart-btn">
            Go to Cart
          </Link>
          <button onClick={onClose} className="close-btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
