import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reduxSlices/cartSlice";
import charactersReducer from "./reduxSlices/charactersSlice";
import { logger } from "redux-logger";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    characters: charactersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
