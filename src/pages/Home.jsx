import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CategoriesSec from "../components/CategoriesSec";
import ProductSection from "../components/ProductSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CategoriesSec />
      <ProductSection />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
