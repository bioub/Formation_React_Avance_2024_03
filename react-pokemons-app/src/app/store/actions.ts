import { createAction } from "@reduxjs/toolkit";

export const updateSearchTerm = createAction<string>('pokemons/updateSearchTerm');