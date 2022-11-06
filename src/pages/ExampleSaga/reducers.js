import { handleActions } from "redux-actions";
import * as actions from "./actions";

const defaultState = {
  isLoading: false,
  error: null,
  pokemons: [],
};

const pokemonReducer = handleActions(
  {
    [actions.loadPokemonsPending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.loadPokemonsFullfield]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      pokemons: payload,
    }),
    [actions.loadPokemonsRejected]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
  },
  defaultState
);

export default pokemonReducer;
