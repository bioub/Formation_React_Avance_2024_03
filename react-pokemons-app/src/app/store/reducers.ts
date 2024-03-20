import { createReducer } from "@reduxjs/toolkit";
import { fetchPokemons, updateSearchTerm } from "./actions.js";
import { RootState } from "./types.js";

const initialState: RootState = {
  pokemons: {
    items: [], // tableau de pokemons,
    loading: false, // est-ce qu'une requete est en cours,
    searchTerm: '',
  },
  users: {},
};

export const pokemonsReducer = createReducer(initialState.pokemons, (builder) => {
  builder.addCase(updateSearchTerm, (state, action) => {
    state.searchTerm = action.payload;
  }).addCase(fetchPokemons.pending, (state, action) => {
    state.loading = true;
  }).addCase(fetchPokemons.fulfilled, (state, action) => {
    state.loading = false;
    state.items = action.payload;
  })
});

export const usersReducer = createReducer(initialState.users, (builder) => {

});

