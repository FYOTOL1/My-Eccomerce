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
export const SignupUser = createAsyncThunk(
  "Auth/SignupUser",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post("/auth/signup", {
        username: data?.username,
        email: data?.email,
        password: data?.password,
        phone_number: data?.phone_number,
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
    login_error: "",
    signup_error: "",
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(LoginUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(LoginUser.fulfilled, (state, { payload }) => {
      if (payload?.token?.length) {
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
      state.loading = false;
      state.login_error = payload?.msg;
    });
    // signup
    builder.addCase(SignupUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(SignupUser.fulfilled, (state, { payload }) => {
      const cookie = new Cookies();
      if (payload?.token?.length) {
        cookie.set("authorization", payload.token, {
          secure: true,
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        });
        state.nav = true;
      }
      const checkAuthed = cookie.get("authorization");
      if (checkAuthed?.length) {
        state.loading = false;
      } else {
        state.loading = true;
      }
    });
    builder.addCase(SignupUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.signup_error = payload?.msg;
    });
  },
});

export default AuthSlice.reducer;
