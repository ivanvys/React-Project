import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import toDoList from "../pages/ReduxToDoList/reducers/index";
import counterManagerReduxToolKit from "../pages/ReduxCounters/reducers/index";
import poke from "../pages/DataFetching/reducers/index";
// import MyToDo from "../pages/MyOwnToDoListOnReduxToolKit/reducers";
// import getPoke from "../pages/MyPokeFetching/reducers";
import pokemonDetail from "../pages/PokemonDetails/reducer/index";
import signInLoad from "../pages/SignIn/SignInReducer/SignInReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import pokemonReducer from "../pages/ExampleSaga/reducers";

const reducers = combineReducers({
  toDoList,
  counterManagerReduxToolKit,
  poke,
  // MyToDo,
  // getPoke,
  pokemonDetail,
  signInLoad,
  pokemonReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["toDoList"],
};

export const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoreActions: ["persist/PERSIST"] },
    }),
});
