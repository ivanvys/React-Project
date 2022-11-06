import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuid } from "uuid";

const apiConfing = {
  baseURL: "https://pokeapi.co/api/v2/",
};

const api = axios.create(apiConfing);

const initialState = {
  isLoading: false,
  error: null, //                    ПОСМОТРИ USEREF
};

export const pokemonLoading = createAsyncThunk(
  "pokemons/allFetch",
  async () => {
    const poke = await api.get("pokemon");
    const responsePoke = poke.data.results.map((item) => {
      return api.get(item.url).then(({ data }) => data);
    });
    const fetchingAllPoke = await Promise.all(responsePoke);
    const newPoke = fetchingAllPoke.map((item) => {
      return {
        name: item.name,
        image: item.sprites.front_shiny,
        experience: item.base_experience,
        id: uuid(),
      };
    });
    return newPoke;
  }
);

const pokemonsSlice = createSlice({
  name: "getPoke",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(pokemonLoading.pending, (state) => {});
    builder.addCase(pokemonLoading.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(pokemonLoading.rejected, (state, action) => {
      state.data = action.payload;
    });
  },
  reducers: {
    deletePoke: (state, action) => {
      const foudedTodo = state.data.findIndex(
        (item) => item.id === action.payload
      );
      state.data.splice(foudedTodo, 1);
    },
    resetPoke: (state) => {
      state.data = [];
    },
  },
});

export const { deletePoke, resetPoke } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
