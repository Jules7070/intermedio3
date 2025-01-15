import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";
import "./Products.css";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (status === "loading") {
    return <p>Loading products...</p>;
  }

  if (status === "failed") {
    return <p>Failed to load products. Please try again later.</p>;
  }

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <p className="product-title">{product.title}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
