import { Routes, Route } from "react-router-dom";
import ROUTE_NAMES from "./routeNames";
import CounterContainer from "../pages/ClassesContainer/ClassesContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounter/FunctionalContainer";
import Home from "../pages/Home";
import ListsContainer from "../pages/Lists/container/ListsContainer";
import CounterOfCounters from "../pages/CounterOfCounters/CounterOfCountersContainer/CounterOfCounters";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<Home />} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
      <Route
        path={ROUTE_NAMES.FUNCTIONAL_COUNTER}
        element={<FunctionalCounterContainer />}
      />
      <Route path={ROUTE_NAMES.LISTS} element={<ListsContainer />} />
      <Route
        path={ROUTE_NAMES.CounterOfCounters_HW2}
        element={<CounterOfCounters />}
      />
    </Routes>
  );
};

export default Router;
