import { currencyArray } from "../db";
import { useSelector, useDispatch } from "react-redux";
import { setCurrency } from "../reduxSlices/cartSlice";

const Checkout = () => {
  const { currency } = useSelector((state) => state.cart);
  const { cartTotal } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleCurrencyChange = (e) => {
    dispatch(setCurrency(e.target.value));
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
