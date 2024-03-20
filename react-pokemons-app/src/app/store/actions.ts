import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons } from "../services/pokemon-service";

export const updateSearchTerm = createAction<string>('pokemons/updateSearchTerm');

// Normalement sans Redux Toolkit pour faire une requete HTTP
// On doit créer 3 actions :
// - une au moment de lancer la requete (ou on pourra indiquer dans le store qu'un loader doit s'afficher) (suffixe /pending)
// - une lorsque que la requete se termine en succès (suffixe /fulfilled)
// - une lorsque que la requete se termine en erreur (suffixe /rejected)

export const fetchPokemons = createAsyncThunk('pokemons/fetchPokemons', () => {
  return getPokemons();
});
