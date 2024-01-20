import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/cart/cartSlice";
import productDetailsReducer from "../components/product_details/productDetailsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    productDetails: productDetailsReducer,
  },
});
