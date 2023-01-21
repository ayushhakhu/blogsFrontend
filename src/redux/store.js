import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/applicationSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
