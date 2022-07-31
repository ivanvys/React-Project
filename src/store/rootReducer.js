import { combineReducers } from "redux";
import { counterOfCounter } from "../pages/ReduxCounters/reducers";
import { CreateToDoList } from "../pages/ReduxToDoList/reducers";

export const rootReducer = combineReducers({
  counterManager: counterOfCounter,
  toDolist: CreateToDoList,
});
