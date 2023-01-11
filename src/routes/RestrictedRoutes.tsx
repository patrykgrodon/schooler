import { useAppSelector } from "app/hooks";
import AuthLayout from "modules/auth/components/AuthLayout";
import { Navigate, Outlet } from "react-router-dom";
import routes from "./routePaths";

const RestrictedRoutes = () => {
  const { user } = useAppSelector(({ auth }) => auth);
  const isRestricted = !user;
  return isRestricted ? (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  ) : (
    <Navigate to={routes.LessonPlan} replace />
  );
};

export default RestrictedRoutes;
