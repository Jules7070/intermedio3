// src/redux/slices/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Acción asíncrona para obtener productos
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

// Slice de Redux
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // Guardamos los productos en el estado
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productSlice.reducer;

