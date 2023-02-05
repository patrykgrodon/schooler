import AuthLayout from "modules/auth/components/AuthLayout";
import { useAuth } from "modules/auth/contexts/authContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCorrectNavigateRoute } from "utils/getCorrectNavigationRoute";

const RestrictedRoutes = () => {
  const { user } = useAuth();
  const isRestricted = !user;
  const location = useLocation();

  if (isRestricted)
    return (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    );

  return (
    <Navigate
      to={location.state?.from || getCorrectNavigateRoute(user.accountType)}
      replace
    />
  );
};

export default RestrictedRoutes;
