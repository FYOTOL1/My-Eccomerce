import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetPopularServices = createAsyncThunk(
  "popularServices/GetPopularServices",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await axios
        .get("/services/popular")
        .then((res) => res?.data)
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const popularServicesSlice = createSlice({
  name: "popularServices",
  initialState: {
    data: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetPopularServices.pending, (state) => {
      state.loading = true;
      state.error = "null";
    });
    builder.addCase(GetPopularServices.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.error = "null";
    });
    builder.addCase(GetPopularServices.rejected, (state, { payload }) => {
      state.error = `${payload}`;
    });
  },
});

export default popularServicesSlice.reducer;
