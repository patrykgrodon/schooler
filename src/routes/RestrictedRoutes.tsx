import { useAppSelector } from "app/hooks";
import { AccountType } from "modules/auth/authSlice";
import AuthLayout from "modules/auth/components/AuthLayout";
import { Navigate, Outlet } from "react-router-dom";
import routes from "./routePaths";

const getCorrectNavigateRoute = (accountType: AccountType) => {
  switch (accountType) {
    case "admin":
      return routes.Classes;
    case "student":
      return routes.LessonPlan;
    case "teacher":
      return routes.LessonPlan;
  }
};

const RestrictedRoutes = () => {
  const { user } = useAppSelector(({ auth }) => auth);
  const isRestricted = !user;

  if (isRestricted)
    return (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    );

  return <Navigate to={getCorrectNavigateRoute(user.accountType)} replace />;
};

export default RestrictedRoutes;
