import { RootState } from "./types";

export function searchTermSelector(state: RootState) {
  return state.pokemons.searchTerm;
}

export function filteredPokemonsSelector(state: RootState) {
  const searchTerm = searchTermSelector(state);

  if (!searchTerm) {
    return state.pokemons.items;
  }

  return state.pokemons.items.filter((p) => p.name?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
}