import Shop from "./components/Shop.component";
import Characters from "./components/Characters.component";
import Cart from "./components/Cart.component";
import Checkout from "./components/Checkout.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateCharactersPlanetsAndFilms } from "./reduxSlices/charactersSlice";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  function fetchStarWarsChars() {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => {
        let fetchedCharacters = data.results.map((char, i) => {
          let films = char.films.map((film) => film.slice(-2, -1));
          let homeWorld = char.homeworld.match(/\d+/);
          return {
            id: i + 1,
            name: char.name,
            films,
            homeWorld,
          };
        });
        dispatch(updateCharactersPlanetsAndFilms(fetchedCharacters));
      })
      .catch((error) =>
        console.log(
          "Star Wars characters fetch request failed with error: " + error
        )
      );
  }

  useEffect(() => {
    fetchStarWarsChars();
  }, []);

  return (
    <div>
      <h1>Mockup Shop with redux toolkit</h1>
      <div className="App-container">
        <Shop></Shop>
        <Characters></Characters>
        <Cart></Cart>
        <Checkout></Checkout>
      </div>
    </div>
  );
};

export default App;
