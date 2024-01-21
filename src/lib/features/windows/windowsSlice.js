import { createSlice } from "@reduxjs/toolkit";

const windowsSlice = createSlice({
  name: "windows",
  initialState: {
    main: false,
    changePasswd: false,
    editAcc: false,
    addAcc: false,
    changeAcc: false,
  },
  reducers: {
    mainWindow(state, action) {
      state.main = !state.main;
    },

    changePasswdWindow(state, action) {
      state.changePasswd = !state.changePasswd;
    },

    editAccWindow(state, action) {
      state.changeAcc = !state.changeAcc;
    },

    addAccWindow(state, action) {
      state.addAcc = !state.addAcc;
    },

    changeAccWindow(state, action) {
      state.changeAcc = !state.changeAcc;
    },
  },
});

export const {
  mainWindow,
  changePasswdWindow,
  editAccWindowm,
  addAccWindow,
  changeAccWindow,
} = windowsSlice.actions;
export default windowsSlice.reducer;
