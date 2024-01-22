import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: true,
  reducers: {
    dashboardVisibility(state, action) {
      state = !state;
    }
  },
});

export const {
    dashboardVisibility
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
