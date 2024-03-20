// const initialState = {
//   pokemons: {
//     searchTerm: '',
//   },
//   users: {},
// };

import { Pokemon } from "../models/pokemon";

export type PokemonsSlice = {
  searchTerm: string;
  items: Pokemon[],
  loading: boolean;
  idsToCompare: number[];
};

export type UsersSlice = {};

export type RootState = {
  pokemons: PokemonsSlice;
  users: UsersSlice;
};
