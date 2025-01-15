import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { store } from "../redux/store";
import Products from "./Products";

jest.mock("axios");

test("fetches and displays products", async () => {
  axios.get.mockResolvedValue({
    data: [
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 50 },
    ],
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    </Provider>
  );

  await waitFor(() => {
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
  });
});
