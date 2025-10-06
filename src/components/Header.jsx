// Header.jsx
import React, { useEffect, useState, useContext } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import { SearchProvider, SearchContext } from "../context/SearchContext";
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { setSearchTerm } = useContext(SearchContext);

  const activeNav = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(total);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <nav>
      <h1>
        <Link to="/">E-commerce</Link>
      </h1>

      <div className="hamburger" onClick={activeNav}>
        <i
          className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"} ${
            menuOpen ? "rotate" : ""
          }`}
        ></i>
      </div>

      <div className={`navContainer ${menuOpen ? "active" : ""}`}>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <HashLink smooth to="/#contact">Contact Us</HashLink>
        </div>

        <div className="cardIcon">
          <Link to="/cart">
            {cartCount > 0 && <p className="cart-badge">{cartCount}</p>}
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>

        {/* 🔍 Search bar now uses context */}
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
