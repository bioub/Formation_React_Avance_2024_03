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

export function idsToCompareSelector(state: RootState) {
  return state.pokemons.idsToCompare;
}

export function pokemonsToCompareSelector(state: RootState) {
  const idsToCompare = idsToCompareSelector(state);

  return state.pokemons.items.filter((p) => idsToCompare.includes(p.id ?? 0));
}