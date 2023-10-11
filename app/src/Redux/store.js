import { configureStore } from "@reduxjs/toolkit";
import popularServicesSlice from "./slices/popularServicesSlice";
import featuredServicesSlice from "./slices/featuredServicesSlice";

// إعداد مخزن Redux
const store = configureStore({
  reducer: {
    popular: popularServicesSlice,
    featured: featuredServicesSlice,
  },
});

export default store;
