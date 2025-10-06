import React from "react";
import "../css/Header.css";
import "../css/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="mainHeroCon">
      <div className="firstHeroCon">
        <h1>Discover Your Style</h1>
        <p>
          Find the best products curated just for you. Shop from men’s, women’s
          clothing, electronics, and more!
        </p>
        <button>Shop Now</button>
      </div>
      <div className="secondHeroCon">
        <img
          src="https://img.freepik.com/premium-psd/smart-watch-web-banner-template_663858-27.jpg"
          alt="HeroImage"
        />
      </div>
    </div>
  );
};

export default HeroSection;
