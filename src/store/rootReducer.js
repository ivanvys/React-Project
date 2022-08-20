import { combineReducers } from "redux";
import { counterManagerReduxToolKit } from "../pages/ReduxCounters/reducers";
import { toDolistSlice } from "../pages/ReduxToDoList/reducers";

export const rootReducer = combineReducers({
  counterManager: counterManagerReduxToolKit,
  toDoList: toDolistSlice,
});
