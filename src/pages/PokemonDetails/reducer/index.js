import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/config";

const getPokemonDetails = (pokename) => api.get(`/pokemon/${pokename}`);
const delay = (set) => new Promise((resolve) => setTimeout(resolve, set));

export const pokemonDetails = createAsyncThunk(
  "pokemonDetails/loadPokemonDetails",
  async (name) => {
    await delay(2000);
    const response = await getPokemonDetails(name);
    return response.data;
  }
);

const initialState = {
  isLoading: false,
  error: "",
  pokemonInfo: { name: "", stats: [] },
};

const pokemonDetailSlice = createSlice({
  name: "pokemonDetails",
  initialState,
  extraReducers: {
    [pokemonDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [pokemonDetails.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.pokemonInfo.name = payload.name;
      state.pokemonInfo.stats = payload.stats;
    },
    [pokemonDetails.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
  },
  reducers: {
    deleteError: (state) => {
      state.error = "";
    },
  },
});

export const { deleteError } = pokemonDetailSlice.actions;

export default pokemonDetailSlice.reducer;
