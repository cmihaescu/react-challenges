import { useSelector, useDispatch } from "react-redux";
import { setCartItems, setCartTotal } from "../reduxSlices/cartSlice";

export const calculateCartTotal = (cartItems) => {
  let cartTotal = cartItems.reduce(
    (cartTotal, cartItem) => cartTotal + cartItem.price,
    0
  );
  return cartTotal;
};

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { currency } = useSelector((state) => state.cart);

  const handleRemoveItemFromCart = (i) => {
    let filteredCartItems = cartItems.filter((item, index) => {
      if (index !== i) {
        return item;
      }
    });
    dispatch(setCartItems(filteredCartItems));
    dispatch(setCartTotal(calculateCartTotal(filteredCartItems)));
  };

  const handleClearCart = () => {
    dispatch(setCartItems([]));
    dispatch(setCartTotal(0));
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((cartItem, i) => {
        return (
          <div key={i}>
            <p>
              {cartItem.product} {cartItem.price} {currency}
              <button onClick={() => handleRemoveItemFromCart(i)}>X</button>
            </p>
          </div>
        );
      })}
      {cartItems.length > 0 && (
        <button onClick={handleClearCart}>Clear cart</button>
      )}
    </div>
  );
};

export default Cart;
