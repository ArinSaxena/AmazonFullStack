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
    removeItem: (state, action) => {
      const id  = action.payload;
      console.log(state.cartItems)
      state.cartItems = state.cartItems.filter((item) =>{console.log(item);return  item.id !== id});
    },
    increaseItem: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseItem: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    toggleItemSelection: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.selected = !item.selected;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
increaseItem,
  decreaseItem,
  toggleItemSelection,
} = cartSlice.actions;

export default cartSlice.reducer;
