import { configureStore } from "@reduxjs/toolkit";
import windowReducer from "./features/windows/windowsSlice";
import dashboardReducer from "./features/dashboard/dashboardSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      window: windowReducer,
      dashboard: dashboardReducer,
    },
  });
};
