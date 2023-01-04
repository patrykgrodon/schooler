import { useAppSelector } from "app/hooks";
import { Navigate, Outlet } from "react-router-dom";
import routes from "./routePaths";

const RestrictedRoutes = () => {
  const { user } = useAppSelector(({ auth }) => auth);
  const isRestricted = !user;
  return isRestricted ? <Outlet /> : <Navigate to={routes.Base} replace />;
};

export default RestrictedRoutes;
