import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/products" className="nav-link">Products</Link>
      <Link to="/cart" className="nav-link">Cart</Link>
      <Link to="/contact" className="nav-link">Contact</Link> {/* Nuevo enlace */}
    </nav>
  );
}
