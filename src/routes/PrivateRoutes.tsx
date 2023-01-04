import { useAppSelector } from "app/hooks";
import Layout from "common/components/Layout/Layout";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import routes from "./routePaths";

const PrivateRoutes = () => {
  const { user } = useAppSelector(({ auth }) => auth);
  const location = useLocation();
  const isAuthorised = !!user;
  return isAuthorised ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to={routes.Login} replace state={{ from: location }} />
  );
};

export default PrivateRoutes;
