import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/Layouts";
import "./index.css";
import { Provider } from "react-redux";
import Router from "./router/routes";
import { store } from "./store/configureStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <MainLayout>
        <Router />
      </MainLayout>
    </Provider>
  </BrowserRouter>
);
