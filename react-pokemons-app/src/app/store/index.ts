import { pokemonsReducer, usersReducer } from './reducers.js';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    users: usersReducer,
  }
});
