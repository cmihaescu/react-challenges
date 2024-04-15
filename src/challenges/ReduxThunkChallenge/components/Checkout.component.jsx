import { currencyArray } from "../db";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrency,
  setCartItems,
  setCartTotal,
} from "../reduxSlices/cartSlice";

const Checkout = () => {
  const { currency } = useSelector((state) => state.cart);
  const { cartTotal } = useSelector((state) => state.cart);
  const { selectedCharacter } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  const handleSendGift = () => {
    if (cartTotal > 0) {
      alert(
        `Gift was send! ${selectedCharacter.name} is very grateful to you!`
      );
    } else {
      alert(`Don't be cheap, buy something fo ${selectedCharacter.name}`);
    }
    dispatch(setCartItems([]));
    dispatch(setCartTotal(0));
  };

  const handleCurrencyChange = (e) => {
    dispatch(setCurrency(e.target.value));
  };
  return (
    <div>
      <h1>Checkout</h1>
      <p>
        Currency&nbsp;
        <select
          onChange={(e) => handleCurrencyChange(e)}
          name="currency"
          id="currency"
        >
          {currencyArray.map((currency, i) => (
            <option key={i}>{currency}</option>
          ))}
        </select>
      </p>
      {selectedCharacter.name &&
        selectedCharacter.homeWorld &&
        selectedCharacter.films && (
          <div>
            <h4>Sent gift to:</h4>
            <p> Name: {selectedCharacter.name}</p>
            <p>Home world: {selectedCharacter.homeWorld}</p>
            <p>Starred in:</p>
            <ul>
              {selectedCharacter.films.map((film, i) => (
                <li key={i}>{film}</li>
              ))}
            </ul>
          </div>
        )}
      <h5>
        Cart Total: {cartTotal} {currency}
      </h5>
      <button onClick={handleSendGift}>Send gift!</button>
    </div>
  );
};

export default Checkout;
