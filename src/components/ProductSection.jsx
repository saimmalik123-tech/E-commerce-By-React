import React, { useContext } from "react";
import "../css/ProductSec.css";
import CardCom from "./CardCom";
import { useProducts } from "../customHooks/useProducts";
import Loader from "./Loader";
import { SearchProvider, SearchContext } from "../context/SearchContext";

const ProductSection = () => {
  const { data } = useProducts();
  const { searchTerm } = useContext(SearchContext);

  const filteredProducts = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="productSecmainCon">
      <h2>Featured Products</h2>
      <div className="proContainer">
        {data.length === 0 ? (
          <Loader />
        ) : filteredProducts.length > 0 ? (
          <CardCom data={filteredProducts} />
        ) : (
          <p className="no-results">No products found.</p>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
