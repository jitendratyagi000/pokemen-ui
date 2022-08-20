import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  hasErrors: false,
  list: [],
  prev: "",
  next: "",
  selectedPokemon: {},
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.hasErrors = payload;
      state.loading = false;
    },
    saveList: (state, { payload }) => {
      state.list = payload.list;
      state.prev = payload.prev;
      state.next = payload.next;
      state.loading = false;
      state.hasErrors = false;
    },
    setSelectedPokemon: (state, { payload }) => {
      state.selectedPokemon = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setError, saveList, setSelectedPokemon } =
  pokemonSlice.actions;

// Selector
export const pokemonSelector = (state) => state.pokemon;

// The Reducer
export default pokemonSlice.reducer;

// Asynchronous thunk action
export function fetchRecipes() {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await axios(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );

      const promises = response.data.results.map(
        async (pokemon) => await axios(`${pokemon.url}`)
      );

      const pokemonDetails = await Promise.all(promises);
      const payload = {
        next: response.data.next,
        prev: response.data.prev,
        list: pokemonDetails.map((pokemon) => pokemon.data),
      };

      dispatch(saveList(payload));
    } catch (error) {
      dispatch(setError(false));
    }
  };
}
