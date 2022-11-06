import { Routes, Route } from "react-router-dom";
import ROUTE_NAMES from "./routeNames";
import CounterContainer from "../pages/ClassesContainer/ClassesContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounter/FunctionalContainer";
import Home from "../pages/Home";
import ListsContainer from "../pages/Lists/container/ListsContainer";
import CounterOfCounters from "../pages/CounterOfCounters/CounterOfCountersContainer/CounterOfCounters";
import FormContainer from "../pages/Forms/FormContainer/FormContainer";
import ReduxCountersContainer from "../pages/ReduxCounters/ReduxCountersContainer/ReduxCountersContainer";
import ReduxToDoListContainer from "../pages/ReduxToDoList/ReduxToDoListContainer/ReduxToDoListContainer";
import DataFetching from "../pages/DataFetching/dataFetching";
import RenderProps from "../pages/RenderProps/RenderProps";
import PokemonDetailContainer from "../pages/PokemonDetails/container/PokemonDetailContainer";
// import ContainerToDo from "../pages/MyOwnToDoListOnReduxToolKit/Container";
// import MyFetching from "../pages/MyPokeFetching/container";
// import MyRenderProp from "../pages/myRenderProp/RenderProp";
import SignUpContainer from "../pages/SignUp/Container/SignUpContainer";
import SignInContainer from "../pages/SignIn/SignInContainer/SignInContainer";
import PrivateRoute from "./PrivateRoute";
import Saga from "../pages/ExampleSaga/Saga";
import MyTimerContainer from "../pages/MyTimer/MyTimerContainer";
import TelephoneListContainer from "../pages/TelephoneList/TelephoneListContainers";
import CalculatorContainer from "../pages/Сalculator/CalculatorContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<Home />} />
      <Route
        path={ROUTE_NAMES.Classes_COUNTER}
        element={<CounterContainer />}
      />
      <Route
        path={ROUTE_NAMES.FUNCTIONAL_COUNTER}
        element={<FunctionalCounterContainer />}
      />
      <Route path={ROUTE_NAMES.LISTS} element={<ListsContainer />} />
      <Route
        path={ROUTE_NAMES.Counter_Manager_HW2}
        element={<CounterOfCounters />}
      />
      <Route path={ROUTE_NAMES.Forms} element={<FormContainer />} />
      <Route
        path={ROUTE_NAMES.COUNTER_MANAGER_REDUX_TOOLKIT}
        element={<ReduxCountersContainer />}
      />
      <Route
        path={ROUTE_NAMES.ToDoList_HW3_TOOLKIT}
        element={<ReduxToDoListContainer />}
      />
      <Route
        path={ROUTE_NAMES.pokemons_REDUX_THUNK_details}
        element={<PokemonDetailContainer />}
      />
      <Route element={<PrivateRoute />}>
        <Route path={ROUTE_NAMES.render_props} element={<RenderProps />} />
        <Route
          path={ROUTE_NAMES.pokemons_REDUX_THUNK}
          element={<DataFetching />}
        />
      </Route>
      {/* <Route path={ROUTE_NAMES.my_todo} element={<ContainerToDo />} />
      <Route path={ROUTE_NAMES.my_fetching} element={<MyFetching />} />
      <Route path={ROUTE_NAMES.my_render_prop} element={<MyRenderProp />} /> */}
      <Route path={ROUTE_NAMES.sign_up} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.sign_in} element={<SignInContainer />} />
      <Route path={ROUTE_NAMES.saga} element={<Saga />} />
      <Route path={ROUTE_NAMES.timer} element={<MyTimerContainer />} />
      <Route
        path={ROUTE_NAMES.phoneList}
        element={<TelephoneListContainer />}
      />
      <Route path={ROUTE_NAMES.calculator} element={<CalculatorContainer />} />
    </Routes>
  );
};

export default Router;
