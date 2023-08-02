import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genras: {},
  },
  reducers: {
    getApiConfigration: (state, action) => {
      state.url = action.payload;
    },
    getGenras: (state, action) => {
      state.genras = action.payload;
    },
  },
});
export const { getApiConfigration, getGenras } = homeSlice.actions;
export default homeSlice.reducer;
