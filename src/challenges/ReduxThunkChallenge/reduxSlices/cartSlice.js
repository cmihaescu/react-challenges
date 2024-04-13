import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotal: 0,
  currency: "EUR",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
    setCartTotal(state, action) {
      state.cartTotal = action.payload;
    },
    setCurrency(state, action) {
      state.currency = action.payload;
    },
  },
});

export const { setCartItems, setCartTotal, setCurrency } = cartSlice.actions;
export default cartSlice.reducer;
