import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./challenges/ReactUseContextChallenge/App";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./challenges/ReactUseContextChallenge/contexts/cartContext";
import { UsersProvider } from "./challenges/ReactUseContextChallenge/contexts/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <UsersProvider>
      <App />
    </UsersProvider>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
