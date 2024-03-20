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
};

export type UsersSlice = {};

export type RootState = {
  pokemons: PokemonsSlice;
  users: UsersSlice;
};
