import { useContext } from "react";
import { currencyArray } from "../db";
import { CartContext } from "../contexts/cartContext";
import { UsersContext } from "../contexts/userContext";

const Checkout = () => {
  const { currency, setCurrency, cartTotal } = useContext(CartContext);
  const { user } = useContext(UsersContext);
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  return (
    <div>
      <h1>Checkout</h1>
      <p>Currency:</p>
      <select
        onChange={(e) => handleCurrencyChange(e)}
        name="currency"
        id="currency"
      >
        {currencyArray.map((currency, i) => (
          <option key={i}>{currency}</option>
        ))}
      </select>
      {user && (
        <div>
          User:
          <p> Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Favorite Product: {user.favoriteProduct}</p>
        </div>
      )}
      <h5>
        Cart Total: {cartTotal} {currency}
      </h5>
    </div>
  );
};

export default Checkout;
