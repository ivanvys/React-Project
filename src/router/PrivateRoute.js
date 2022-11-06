import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import ROUTE_NAMES from "./routeNames";

const PrivateRoute = () => {
  const { isAuth } = useSelector((state) => state.signInLoad);

  return !isAuth ? <Navigate to={ROUTE_NAMES.sign_in} /> : <Outlet />;
};

export default PrivateRoute;
