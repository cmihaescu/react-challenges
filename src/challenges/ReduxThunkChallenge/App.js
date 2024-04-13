import Shop from "./components/Shop.component";
import Users from "./components/Users.component";
import Cart from "./components/Cart.component";
import Checkout from "./components/Checkout.component";
import "./App.scss";

const App = () => {
  return (
    <div>
      <h1>Mockup Shop with redux toolkit</h1>
      <div className="App-container">
        <Shop></Shop>
        <Users></Users>
        <Cart></Cart>
        <Checkout></Checkout>
      </div>
    </div>
  );
};

export default App;
