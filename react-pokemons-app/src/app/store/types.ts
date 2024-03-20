// const initialState = {
//   pokemons: {
//     searchTerm: '',
//   },
//   users: {},
// };

export type PokemonsSlice = {
  searchTerm: string;
};

export type UsersSlice = {};

export type RootState = {
  pokemons: PokemonsSlice;
  users: UsersSlice;
};
