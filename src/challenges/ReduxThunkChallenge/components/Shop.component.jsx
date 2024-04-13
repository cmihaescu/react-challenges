import { productsArray } from "../db";
import { calculateCartTotal } from "./Cart.component";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems, setCartTotal } from "../reduxSlices/cartSlice";

const Shop = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { currency } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddProduct = (index) => {
    let newCartItems = [...cartItems, productsArray[index]];
    dispatch(setCartItems(newCartItems));
    dispatch(setCartTotal(calculateCartTotal(newCartItems)));
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
