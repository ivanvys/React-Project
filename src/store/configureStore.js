import { configureStore } from "@reduxjs/toolkit";
import toDoList from "../pages/ReduxToDoList/reducers/index";
import counterManagerReduxToolKit from "../pages/ReduxCounters/reducers/index";
import pokeActions from "../pages/DataFetching/reducers/index";

export const store = configureStore({
  reducer: {
    toDoList,
    counterManagerReduxToolKit,
    pokeActions,
  },
});
