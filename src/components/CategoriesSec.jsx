import React from "react";
import '../css/CategoriesSec.css'

const CategoriesSec = () => {
  return (
    <div className="mainCategoryCon">
      <h2>Featured Categories</h2>
      <div className="categoryCard">
        <div className="cateCard">
          <i className="fa-solid fa-shirt"></i>
          <h3>Clothing</h3>
          <p>Trendy outfits for every season</p>
        </div>

        <div className="cateCard">
          <i className="fa-solid fa-mobile-screen-button"></i>
          <h3>Electronics</h3>
          <p>Latest gadgets &amp; accessories</p>
        </div>

        <div className="cateCard">
          <i className="fa-solid fa-couch"></i>
          <h3>Home &amp; Living</h3>
          <p>Modern decor and furniture</p>
        </div>

        <div className="cateCard">
          <i className="fa-solid fa-gem"></i>
          <h3>Accessories</h3>
          <p>Stylish add-ons to upgrade your look</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSec;
