import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const updatePlanetsAndFilmsInCharactersArray = (
  fetchedCharacters,
  planets,
  films
) => {
  let updatedCharacters = fetchedCharacters.map((fetchedCharacter) => {
    let fetchedCharacterFilms = fetchedCharacter.films.map((number) => {
      let filmIndex = parseInt(number) - 1;
      if (filmIndex >= 0 && filmIndex < films.length) {
        return films[filmIndex].title;
      } else {
        return "Unkown Film";
      }
    });

    fetchedCharacter.films = fetchedCharacterFilms;

    let fetchedCharacterPlanet =
      planets[Number(fetchedCharacter.homeWorld) - 1];
    return { ...fetchedCharacter, homeWorld: fetchedCharacterPlanet.name };
  });

  return updatedCharacters;
};

export const updateCharactersPlanetsAndFilms = createAsyncThunk(
  "characters/updateCharactersPlanetsAndFilms",
  async (fetchedCharacters) => {
    let planetsFirstPage = await fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((data) => {
        let fetchedPlanetsFirstPage = data.results.map((planet, i) => {
          return {
            id: i + 1,
            name: planet.name,
          };
        });
        return fetchedPlanetsFirstPage;
      })
      .catch((error) =>
        console.log("Star Wars films fetch request failed with error: " + error)
      );
    let planetsSecondPage = await fetch("https://swapi.dev/api/planets/?page=2")
      .then((response) => response.json())
      .then((data) => {
        let fetchedPlanetsSecondPage = data.results.map((planet, i) => {
          return {
            id: i + 1,
            name: planet.name,
          };
        });
        return fetchedPlanetsSecondPage;
      })
      .catch((error) =>
        console.log("Star Wars films fetch request failed with error: " + error)
      );
    let planets = planetsFirstPage.concat(planetsSecondPage);

    const fetchingFilms = fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => {
        return data.results;
      })
      .catch((error) =>
        console.log(
          "Star Wars films fetch request with thunk failed with error: " + error
        )
      );
    let films = await fetchingFilms;

    return updatePlanetsAndFilmsInCharactersArray(
      fetchedCharacters,
      planets,
      films
    );
  }
);

const initialState = {
  selectedCharacter: {},
  characters: [],
  isFetchingCharacters: true,
  failedToFetchCharacters: false,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setSelectedCharacter(state, action) {
      state.selectedCharacter = action.payload;
    },
    setCharacters(state, action) {
      state.characters = action.payload;
    },
    setFilms(state, action) {
      state.films = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateCharactersPlanetsAndFilms.pending, (state) => {
      state.isFetchingCharacters = true;
    });
    builder.addCase(
      updateCharactersPlanetsAndFilms.fulfilled,
      (state, action) => {
        state.isFetchingCharacters = false;
        state.characters = action.payload;
      }
    );
    builder.addCase(updateCharactersPlanetsAndFilms.rejected, (state) => {
      state.isFetchingCharacters = false;
      state.failedToFetchCharacters = true;
    });
  },
});

export const { setSelectedCharacter, setCharacters, setFilms } =
  charactersSlice.actions;
export default charactersSlice.reducer;
