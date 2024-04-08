import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

export const calculateCartTotal = (cartItems) => {
  let cartTotal = cartItems.reduce(
    (cartTotal, cartItem) => cartTotal + cartItem.price,
    0
  );
  return cartTotal;
};

const Cart = () => {
  const { cartItems, setCartItems, setCartTotal, currency } =
    useContext(CartContext);
  const handleRemoveItemFromCart = (i) => {
    let filteredCartItems = cartItems.filter((item, index) => {
      if (index !== i) {
        return item;
      }
    });
    setCartItems(filteredCartItems);
    setCartTotal(calculateCartTotal(filteredCartItems));
  };

  const handleClearCart = () => {
    setCartItems([]);
    setCartTotal(0);
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
