import { createReducer } from "@reduxjs/toolkit";
import { updateSearchTerm } from "./actions.js";
import { RootState } from "./types.js";

const initialState: RootState = {
  pokemons: {
    searchTerm: '',
  },
  users: {},
};

export const pokemonsReducer = createReducer(initialState.pokemons, (builder) => {
  builder.addCase(updateSearchTerm, (state, action) => {
    state.searchTerm = action.payload;
  });
});

export const usersReducer = createReducer(initialState.users, (builder) => {

});

