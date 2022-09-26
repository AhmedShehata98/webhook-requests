import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./Slice/AppSlice";

export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
  },
});
