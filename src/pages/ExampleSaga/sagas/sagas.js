import { takeEvery, call, put } from "redux-saga/effects";
import {
  loadPokemonsFullfield,
  loadPokemonsPending,
  loadPokemonsRejected,
} from "../actions";
import { getPokemons } from "../api";

function* loadPokemonsWorker() {
  try {
    const response = yield call(getPokemons);
    yield put(loadPokemonsFullfield(response.data));
  } catch (error) {
    yield put(loadPokemonsRejected(error.message));
  }
}

function* loadPokemonsWatcher() {
  yield takeEvery(loadPokemonsPending, loadPokemonsWorker);
}

export default loadPokemonsWatcher;
