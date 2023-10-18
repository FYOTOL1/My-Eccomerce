import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetUsers = createAsyncThunk(
  "users/GetUsers",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get("/users/data");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const DeleteUser = createAsyncThunk(
  "usersSlice/DeleteUser",
  async (_id, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const res = await axios.delete(`/users/data/delete/${_id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
      dispatch(GetUsers());
    }
  }
);

export const UpdateUser = createAsyncThunk(
  "usersSlice/UpdateUser",
  async (data, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const update = await axios.post("/users/data/update", {
        _id: data._id,
        username: data.Username,
        email: data.Email,
        password: data.Password,
        phone_number: data.Phone_number,
        role: data.Role,
      });
      dispatch(GetUsers());
      return update.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    filter: [],
    loading: false,
    error: null,
  },
  reducers: {
    search: (state, { payload }) => {
      state.filter = state.data
        .filter((user) => user.username.toLowerCase().includes(payload))
        .map((user) => user);
    },
  },

  extraReducers: (builder) => {
    // Get Users
    builder.addCase(GetUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(GetUsers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.error = null;
    });
    builder.addCase(GetUsers.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    // Delete User
    builder.addCase(DeleteUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(DeleteUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      console.log(payload);
    });
    builder.addCase(DeleteUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    // Update User
    builder.addCase(UpdateUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(UpdateUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(UpdateUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { search } = usersSlice.actions;
export default usersSlice.reducer;
