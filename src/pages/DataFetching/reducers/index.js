import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/config";
import { getPoke } from "../api/api";

const initialState = {
  isLoading: false,
  error: null,
  pokemonsы: [],
};
// const delay = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
export const loadPokemons = createAsyncThunk("pokemons/fetchAll", async () => {
  const response = await getPoke();
  return response.data;
});

const pokemonsSlice = createSlice({
  name: "poke",
  initialState,
  extraReducers: {
    [loadPokemons.pending]: (state) => {
      state.isLoading = true;
    },
    [loadPokemons.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.pokemonsы = payload;
    },
    [loadPokemons.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
  },
  reducers: {
    deletePokemon: (state, action) => {
      const foundPokemonIndex = state.pokemonsы.findIndex((item) => {
        return item.id === action.payload;
      });
      state.pokemonsы.splice(foundPokemonIndex, 1);
    },
    resetPokemons: (state) => {
      state.pokemonsы = [];
    },
  },
});

export const { deletePokemon, resetPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
