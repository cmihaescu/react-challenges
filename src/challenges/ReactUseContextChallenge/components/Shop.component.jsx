import { useContext } from "react";
import { productsArray } from "../db";
import { CartContext } from "../contexts/cartContext";
import { calculateCartTotal } from "./Cart.component";

const Shop = () => {
  const { cartItems, setCartItems, currency, setCartTotal } =
    useContext(CartContext);

  const handleAddProduct = (index) => {
    let newCartItems = [...cartItems, productsArray[index]];
    setCartItems(newCartItems);
    setCartTotal(calculateCartTotal(newCartItems));
  };

  return (
    <div className="home">
      <h1>Our products:</h1>
      {productsArray.map((product, index) => {
        return (
          <div key={product.id}>
            <p>
              {product.product} {product.price} {currency}
              <button onClick={() => handleAddProduct(index)}> Add </button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
