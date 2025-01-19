import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {},
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
