import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reduxSlices/cartSlice";
import userReducer from "./reduxSlices/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
