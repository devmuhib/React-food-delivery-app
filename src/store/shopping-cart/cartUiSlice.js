import { createSlice } from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
  name: "cartUi",
  initialState: { cartIsVisible: false },

  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartUiActions = cartUiSlice.actions;
export default cartUiSlice;
