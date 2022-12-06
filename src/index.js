import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import MainLayout from "./components/Layouts";
import "./index.css";
import { Provider } from "react-redux";
import Router from "./router/routes";
import { store } from "./store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainLayout>
          <Router />
        </MainLayout>
      </PersistGate>
    </Provider>
  </HashRouter>
);
