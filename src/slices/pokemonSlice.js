import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";
import { sortArray } from "../utils";

const initialState = {
  loading: false,
  hasErrors: false,
  list: [],
  prev: "",
  next: "",
  selectedPokemon: {},
  sortBy: { key: "name", direction: "asc" },
  perPageItem: 10,
  searchQuery: "",
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
      state.list = sortArray(
        state.sortBy.key,
        state.sortBy.direction,
        payload.list
      );
      state.prev = payload.prev;
      state.next = payload.next;
      state.loading = false;
      state.hasErrors = false;
    },
    setSelectedPokemon: (state, { payload }) => {
      state.selectedPokemon = payload;
    },
    saveSortedList: (state, { payload }) => {
      let direction = "desc";

      if (payload.sortBy.key !== payload.key) {
        direction = "asc";
      } else if (
        payload.sortBy.key === payload.key &&
        payload.sortBy.direction === "desc"
      ) {
        direction = "asc";
      } else {
        direction = "desc";
      }

      state.sortBy = {
        key: payload.key,
        direction,
      };
      state.list = sortArray(payload.key, direction, payload.list);
    },
    savePerPageItem: (state, { payload }) => {
      state.perPageItem = payload;
    },
    saveSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
  setError,
  saveList,
  setSelectedPokemon,
  saveSortedList,
  savePerPageItem,
  saveSearchQuery,
} = pokemonSlice.actions;

// Selector
export const pokemonSelector = (state) => state.pokemon;

// The Reducer
export default pokemonSlice.reducer;

// Asynchronous thunk action
export function fetchList(apiurl) {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));

    try {
      const response = await axios(
        apiurl ??
          `https://pokeapi.co/api/v2/pokemon?limit=${
            getState().pokemon.perPageItem
          }&offset=0`
      );

      const promises = response.data.results.map(
        async (pokemon) => axios(`${pokemon.url}`)
      );

      const pokemonDetails = await Promise.all(promises);
      const payload = {
        next: response.data.next,
        prev: response.data.previous,
        list: pokemonDetails.map((pokemon) => pokemon.data),
      };

      dispatch(saveList(payload));
    } catch (error) {
      dispatch(setError(false));
    }
  };
}
