import { legacy_createStore } from 'redux';

const initialState = {
  pokemons: {
    searchTerm: '',
  },
  users: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'pokemons/updateSearchTerm':
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          searchTerm: action.newTerm,
        },
      };
    default:
      return state;
  }
}

const store = legacy_createStore(reducer);

// Dans un composant qui s'abonne au store
store.subscribe(() => {
  console.log('state complet', store.getState());
  console.log('searchTerm', store.getState().pokemons.searchTerm);
});

// Dans un composant qui doit écrire sur le store
store.dispatch({ type: 'pokemons/updateSearchTerm', newTerm: 'p' });
store.dispatch({ type: 'pokemons/updateSearchTerm', newTerm: 'pi' });
store.dispatch({ type: 'pokemons/updateSearchTerm', newTerm: 'pik' });
