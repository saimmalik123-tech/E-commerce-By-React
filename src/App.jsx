import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import Home from "./pages/Home";
import Card from "./pages/Card";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </SearchProvider>
    </Router>
  );
}

export default App;
