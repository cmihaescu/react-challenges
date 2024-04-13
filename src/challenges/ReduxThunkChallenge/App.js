import Shop from "./components/Shop.component";
import Characters from "./components/Characters.component";
import Cart from "./components/Cart.component";
import Checkout from "./components/Checkout.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setCharacters,
  setFilms,
  setPlanets,
  fetchPlanets,
} from "./reduxSlices/charactersSlice";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const { planets } = useSelector((state) => state.characters);
  const { films } = useSelector((state) => state.characters);
  const { characters } = useSelector((state) => state.characters);

  function fetchStarWarsChars() {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => {
        let fetchedCharacters = data.results.map((char, i) => {
          let films = char.films.map((film) => film.slice(-2, -1));
          let homeWorld = char.homeworld.slice(-2, -1);
          return {
            id: i + 1,
            name: char.name,
            films,
            homeWorld,
          };
        });
        //here I need to input thunk logic -> fetch planets and movies -> update characters
        // implement also besdies fullfilled, the pending and rejected
        dispatch(fetchPlanets());
        dispatch(setCharacters(fetchedCharacters));
      })
      .catch((error) =>
        console.log(
          "Star Wars characters fetch request failed with error: " + error
        )
      );
  }

  function fetchStarWarsMovies() {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => {
        let fetchedFilms = data.results.map((film, i) => {
          return {
            id: i + 1,
            title: film.title,
          };
        });
        dispatch(setFilms(fetchedFilms));
      })
      .catch((error) =>
        console.log("Star Wars films fetch request failed with error: " + error)
      );
  }

  function fetchStarWarsPlanets() {
    fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((data) => {
        let fetchedPlanets = data.results.map((planet, i) => {
          return {
            id: i + 1,
            name: planet.name,
          };
        });
        dispatch(setPlanets(fetchedPlanets));
      })
      .catch((error) =>
        console.log("Star Wars films fetch request failed with error: " + error)
      );
  }

  useEffect(() => {
    fetchStarWarsChars();
    fetchStarWarsMovies();
    // fetchStarWarsPlanets();
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
