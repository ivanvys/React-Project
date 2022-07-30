import { combineReducers } from "redux";
import { counterOfCounter } from "../pages/ReduxCounters/reducers";

export const rootReducer = combineReducers({
  counterManager: counterOfCounter,
  taxes: () => ({ value: 17 }),
});
