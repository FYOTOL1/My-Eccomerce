import { configureStore } from "@reduxjs/toolkit";
import popularServicesSlice from "./slices/popularServicesSlice";
import featuredServicesSlice from "./slices/featuredServicesSlice";
import authSlice from "./slices/authSlice";
import usersSlice from "./slices/admin/usersSlice";

const store = configureStore({
  reducer: {
    popular: popularServicesSlice,
    featured: featuredServicesSlice,
    auth: authSlice,
    users: usersSlice,
  },
});

export default store;
