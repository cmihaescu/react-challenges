import { useEffect, useReducer, useState } from "react";
import { ProductCard } from "./ProductCard";
import "./App.scss";
import { cartReducer } from "./cartReducer";
import { Cart } from "./Cart";
import { SavedItems } from "./SavedItems";

const App = () => {
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((data) => data.json())
        .then((products) => setProducts(products))
        .catch((err) =>
          console.error("There was an error while fetching products: ", err)
        );
    };

    fetchProducts();
  }, []);

  const handleReducer = (action) => {
    dispatch({
      type: action.type,
      payload: action.payload,
    });
  };

  return (
    <div>
      <h1>Use Reducer</h1>
      <div className="container">
        <ul className="product-list">
          {products.map((product) => {
            const { id, title, price, image, description } = product;
            return (
              <li key={id}>
                <ProductCard
                  id={id}
                  title={title}
                  price={price}
                  image={image}
                  description={description}
                  handleReducer={handleReducer}
                />
              </li>
            );
          })}
        </ul>
        <div className="cart-and-saved-items">
          <Cart state={state} />
          <SavedItems state={state} />
        </div>
      </div>
    </div>
  );
};

export default App;
