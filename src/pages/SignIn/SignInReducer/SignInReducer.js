import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_KEYS } from "../../../constants";

import { signIn } from "../api/config";

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

export const signInLoad = createAsyncThunk(
  "auth/signIn",
  async (some, { rejectWithValue }) => {
    try {
      await delay(1000);
      const response = await signIn(some);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const authInSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: null,
    userData: {},
    accessToken: "",
    isAuth: false,
  },
  extraReducers: {
    [signInLoad.pending]: (state) => {
      state.isLoading = true;
    },
    [signInLoad.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const { accessToken, ...userData } = payload;
      state.userData = userData;
      state.accessToken = accessToken;
      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
      state.isAuth = true;
    },
    [signInLoad.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    },
  },
  reducers: {
    logOut: () => {
      localStorage.clear();
      window.location.reload();
    },
  },
});

export const { logOut } = authInSlice.actions;

export default authInSlice.reducer;
