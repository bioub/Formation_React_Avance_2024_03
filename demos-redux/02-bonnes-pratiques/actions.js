import { UPDATE_SEARCH_TERM } from './constants.js';

export function updateSearchTerm(newTerm) {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: newTerm,
  };
}
