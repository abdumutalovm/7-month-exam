import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
const initialState = {
  value: "",
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    add: (state, actions) => {
      state.value = actions.payload;
    },
    remove: (state) => {
      state.value = "";
    },
  },
});
export const { add, remove } = tokenSlice.actions;
export default tokenSlice.reducer;
