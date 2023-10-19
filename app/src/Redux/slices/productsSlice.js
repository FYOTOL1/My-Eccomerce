import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProducts = createAsyncThunk(
  "Products/GetProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const getProducts = await axios.get("/products");
      return getProducts.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const GetProduct = createAsyncThunk(
  "Products/GetProduct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const getProduct = await axios.get(`/products/${id}`);
      return getProduct.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "Products",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    // Get Products
    builder.addCase(GetProducts.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(GetProducts.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(GetProducts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // Get Product
    builder.addCase(GetProduct.pending, (state) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(GetProduct.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.error = false;
    });

    builder.addCase(GetProduct.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default productsSlice.reducer;
