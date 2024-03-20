import { RootState } from "./types";

export function searchTermSelector(state: RootState) {
  return state.pokemons.searchTerm;
}