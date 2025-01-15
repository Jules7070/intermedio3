import { renderHook, act } from "@testing-library/react";
import useCart from "./Cart";

test("initializes with an empty cart", () => {
  const { result } = renderHook(() => useCart());
  expect(result.current.cart).toEqual([]); // El carrito debería empezar vacío
});

test("adds a product to the cart", () => {
  const { result } = renderHook(() => useCart());

  const product = { id: 1, name: "Product 1", price: 100 };
  act(() => {
    result.current.addToCart(product);
  });

  expect(result.current.cart).toHaveLength(1);
  expect(result.current.cart[0]).toEqual(product);
});
