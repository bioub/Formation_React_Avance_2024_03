import { legacy_createStore } from 'redux';
import { reducer } from './reducers.js';
import { searchTermSelector } from './selectors.js';
import { updateSearchTerm } from './actions.js';

const store = legacy_createStore(reducer);

// Dans un composant qui s'abonne au store
store.subscribe(() => {
  console.log('state complet', store.getState());
  console.log('searchTerm', searchTermSelector(store.getState()));
});

// Dans un composant qui doit écrire sur le store
store.dispatch(updateSearchTerm('p'));
store.dispatch(updateSearchTerm('pi'));
store.dispatch(updateSearchTerm('pik'));
