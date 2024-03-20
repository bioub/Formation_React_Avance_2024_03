import { createReducer } from '@reduxjs/toolkit';
import { fetchPokemons, selectId, updateSearchTerm } from './actions.js';
import { RootState } from './types.js';

const initialState: RootState = {
  pokemons: {
    items: [], // tableau de pokemons,
    loading: false, // est-ce qu'une requete est en cours,
    searchTerm: '',
    idsToCompare: [],
  },
  users: {},
};

export const pokemonsReducer = createReducer(
  initialState.pokemons,
  (builder) => {
    builder
      .addCase(updateSearchTerm, (state, action) => {
        state.searchTerm = action.payload;
      })
      .addCase(selectId, (state, action) => {
        if (state.idsToCompare.includes(action.payload)) {
          state.idsToCompare = state.idsToCompare.filter(
            (currentId) => currentId !== action.payload
          );
        } else if (state.idsToCompare.length < 2) {
          state.idsToCompare.push(action.payload);
        }
      })
      .addCase(fetchPokemons.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      });
  }
);

export const usersReducer = createReducer(initialState.users, (builder) => {});
