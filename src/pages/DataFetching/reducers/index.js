import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/config";
const initialState = {
  isLoading: false,
  pokemons: [],
  error: null,
};

export const loadPokemons = createAsyncThunk(
  "pokemons/fetchAll",
  async (name, { rejectWithValue }) => {
    const pokemons = await api.get("/pokemon");
    const poke = pokemons.data.results.map((item) => {
      return api.get(item.url).then(({ data }) => data);
    });
    const detailPoke = await Promise.all(poke);
    const newPoke = detailPoke.map((item) => {
      return {
        name: item.name,
        image: item.sprites.front_shiny,
        experience: item.base_experience,
        id: item.id,
      };
    });
    console.log(newPoke);
    return newPoke;
  }
);

const pokemonsSlice = createSlice({
  name: "pokeActions",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loadPokemons.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loadPokemons.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(loadPokemons.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
  reducers: {},
});

export default pokemonsSlice.reducer;
