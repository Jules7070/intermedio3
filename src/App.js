import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Contact from "./components/Contact"; // Importar la nueva página de contacto
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
}


