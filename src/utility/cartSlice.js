import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      // state.cartItems.push(id);
    },
    removeItem: (state, action) => {},
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
