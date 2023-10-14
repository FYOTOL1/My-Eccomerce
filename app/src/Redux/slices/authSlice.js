import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

export const LoginUser = createAsyncThunk(
  "Auth/LoginUser",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post("/auth/login", {
        email: data.email,
        password: data.password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    nav: false,
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(LoginUser.fulfilled, (state, { payload }) => {
      if (payload?.token?.length) {
        console.log(payload);
        const cookie = new Cookies();
        cookie.set("authorization", payload.token, {
          secure: true,
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        });
        state.nav = true;
      }
      state.loading = false;
    });
    builder.addCase(LoginUser.rejected, (state, { payload }) => {
      state.token = "";
      state.error = payload?.msg;
    });
  },
});

export default AuthSlice.reducer;
