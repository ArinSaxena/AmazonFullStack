import cartSlice from "utility/cartSlice";
import authSlice from "utility/authSlice";


import { configureStore } from "@reduxjs/toolkit";
// const cartReducer

const Store = configureStore({
  reducer: {
    cart: cartSlice,
    user:authSlice,
  },
});

export default Store;
