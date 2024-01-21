import { configureStore } from "@reduxjs/toolkit";
import windowReducer from "./features/windows/windowsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      window: windowReducer,
    },
  });
};
