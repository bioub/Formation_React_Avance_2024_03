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

import { combineReducers } from "redux";
import { UPDATE_SEARCH_TERM } from "./constants.js";

const initialState = {
  pokemons: {
    searchTerm: '',
  },
  users: {},
};

export function pokemonsReducer(state = initialState.pokemons, action) {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
}

export function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const reducer = combineReducers({
  pokemons: pokemonsReducer,
  users: usersReducer,
});