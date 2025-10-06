import React, { useState } from "react";
import "../css/ProductSec.css";
import Modal from "../components/Popup";

const CardCom = ({ data, searchTerm = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find((p) => p.id === item.id);

    if (existingItem) {
      cart = cart.map((p) =>
        p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
      );
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));

    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {filteredData.length === 0 ? (
        <p style={{ textAlign: "center", color: "#777" }}>No products found.</p>
      ) : (
        filteredData.map((item) => (
          <article key={item.id} className="proCard">
            <img src={item.image} alt={item.title} />
            <h3 title={item.title}>
              {item.title.length > 25
                ? item.title.slice(0, 25) + "..."
                : item.title}
            </h3>
            <p className="descriptionPro">{item.description}</p>
            <h4>$ {item.price}</h4>
            <p className="rating">
              ⭐️ {item.rating.rate} ({item.rating.count} Sold)
            </p>
            <button className="buyBtn" onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </article>
        ))
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default CardCom;
