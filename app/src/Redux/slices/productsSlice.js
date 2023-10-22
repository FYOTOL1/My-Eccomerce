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

export const AddProduct = createAsyncThunk(
  "Products/AddProduct",
  async (data, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const AddProduct = await axios.post("/products", {
        img: data.Img,
        title: data.Title,
        price: data.Price,
        info: data.Info,
        category: data.Category,
        quantity: data.Quantity,
      });
      return AddProduct.data;
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
      dispatch(GetProducts());
    }
  }
);

const productsSlice = createSlice({
  name: "Products",
  initialState: {
    data: [],
    filter: [],
    loading: false,
    error: null,
  },

  reducers: {
    productsSearch: (state, { payload }) => {
      if (!state.loading) {
        if (payload.find_by === "title") {
          state.filter = state?.data?.filter((e) =>
            e?.title?.toLowerCase()?.includes(payload.value.toLowerCase())
          );
        } else if (payload.find_by === "category") {
          state.filter = state?.data?.filter((e) =>
            e?.category?.toLowerCase()?.includes(payload.value.toLowerCase())
          );
        }
      }
    },
  },

  extraReducers: (builder) => {
    // Get Products
    builder.addCase(GetProducts.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(GetProducts.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.filter = state.data;
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

    // Add Product
    builder.addCase(AddProduct.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(AddProduct.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.error = false;
    });
    builder.addCase(AddProduct.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { productsSearch } = productsSlice.actions;

export default productsSlice.reducer;
