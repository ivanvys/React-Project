import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootSaga from "./rootSaga";
import { persistedReducer } from "./configureStore";

const sagaMiddleware = createSagaMiddleware();

export function configureStore() {
  const stores = createStore(
    persistedReducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return stores;
}
