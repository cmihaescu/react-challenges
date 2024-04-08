import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  cartTotal: 0,
  currency: "EUR",
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [currency, setCurrency] = useState("EUR");

  const value = {
    cartItems,
    setCartItems,
    cartTotal,
    setCartTotal,
    currency,
    setCurrency,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
