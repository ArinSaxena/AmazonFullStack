import cartSlice from "utility/cartSlice";

import { configureStore } from "@reduxjs/toolkit";
// const cartReducer

const Store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default Store;
