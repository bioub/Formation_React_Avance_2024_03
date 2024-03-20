// import { UPDATE_SEARCH_TERM } from './constants.js';

import { createAction } from "@reduxjs/toolkit";

// export function updateSearchTerm(newTerm) {
//   return {
//     type: UPDATE_SEARCH_TERM,
//     payload: newTerm,
//   };
// }

export const updateSearchTerm = createAction('pokemons/updateSearchTerm');