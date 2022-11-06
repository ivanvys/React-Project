import { createAction } from "redux-actions";

export const loadPokemonsPending = createAction("LOAD_POKEMONS_PENDING");
export const loadPokemonsFullfield = createAction("LOAD_POKEMONS_FULLFIELD");
export const loadPokemonsRejected = createAction("LOAD_POKEMONS_REJECTED");
