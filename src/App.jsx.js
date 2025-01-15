import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
    </Router>
);

export default App;
