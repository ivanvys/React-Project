import { all } from "redux-saga/effects";
import loadPokemonsWatcher from "../pages/ExampleSaga/sagas/sagas";

function* rootSaga() {
  yield all([loadPokemonsWatcher()]);
}
export default rootSaga;
