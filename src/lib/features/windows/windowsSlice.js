import { createSlice } from "@reduxjs/toolkit";

const windowsSlice = createSlice({
  name: "windows",
  initialState: {
    main: false,
    mainSide: false,
    changePasswd: false,
    editAcc: false,
    addAcc: false,
    changeAcc: false,
    delAcc: false,
  },
  reducers: {
    mainSideWindow(state, action) {
      state.mainSide = !state.mainSide;
    },
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

    deleteAccWindow(state, action) {
      state.delAcc = !state.delAcc;
    },
  },
});

export const {
  mainSideWindow,
  mainWindow,
  changePasswdWindow,
  editAccWindow,
  addAccWindow,
  changeAccWindow,
  deleteAccWindow,
} = windowsSlice.actions;
export default windowsSlice.reducer;
