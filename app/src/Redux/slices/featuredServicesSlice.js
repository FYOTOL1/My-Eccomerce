import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetFeaturedServices = createAsyncThunk(
  "featuredServices/GetFeaturedServices",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("/services/featured");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const featuredServicesSlice = createSlice({
  name: "featuredServices",
  initialState: {
    data: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetFeaturedServices.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(GetFeaturedServices.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.error = "";
      console.log(payload);
    });
    builder.addCase(GetFeaturedServices.rejected, (state, { payload }) => {
      state.error = `${payload}`;
      console.log(payload);
    });
  },
});

export default featuredServicesSlice.reducer;
