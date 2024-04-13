import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  selectedCharacter: {},
  characters: [],
  films: [],
  planets: [],
};

export const fetchPlanets = createAsyncThunk(
  "characters/fetchPlanets",
  async () => {
    const fetchingPlanets = fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((data) => {
        return data.results;
      })
      .catch((error) =>
        console.log(
          "Star Wars planets fetch request with thunk failed with error: " +
            error
        )
      );
    let planets = await fetchingPlanets;
    return planets;
  }
);

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
    setPlanets(state, action) {
      state.planets = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlanets.fulfilled, (state, action) => {
      state.planets = action.payload;
    });
  },
});

export const { setSelectedCharacter, setCharacters, setFilms, setPlanets } =
  charactersSlice.actions;
export default charactersSlice.reducer;
