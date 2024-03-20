import { pokemonsReducer, usersReducer } from './reducers.js';
import { searchTermSelector } from './selectors.js';
import { updateSearchTerm } from './actions.js';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    users: usersReducer,
  }
});

// Dans un composant qui s'abonne au store
store.subscribe(() => {
  console.log('state complet', store.getState());
  console.log('searchTerm', searchTermSelector(store.getState()));
});

// Dans un composant qui doit écrire sur le store
store.dispatch(updateSearchTerm('p'));
store.dispatch(updateSearchTerm('pi'));
store.dispatch(updateSearchTerm('pik'));
