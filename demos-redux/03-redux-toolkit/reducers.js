// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'pokemons/updateSearchTerm':
//       return {
//         ...state,
//         pokemons: {
//           ...state.pokemons,
//           searchTerm: action.newTerm,
//         },
//       };
//     default:
//       return state;
//   }
// }

import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { updateSearchTerm } from "./actions.js";

const initialState = {
  pokemons: {
    searchTerm: '',
  },
  users: {},
};

// export function pokemonsReducer(state = initialState.pokemons, action) {
//   switch (action.type) {
//     case UPDATE_SEARCH_TERM:
//       return {
//         ...state,
//         searchTerm: action.payload,
//       };
//     default:
//       return state;
//   }
// }

export const pokemonsReducer = createReducer(initialState.pokemons, (builder) => {
  builder.addCase(updateSearchTerm, (state, action) => {
    state.searchTerm = action.payload;
  });
});

// export function usersReducer(state = initialState.users, action) {
//   switch (action.type) {
//     default:
//       return state;
//   }
// }

export const usersReducer = createReducer(initialState.users, (builder) => {

});

