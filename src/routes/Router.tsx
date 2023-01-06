import Login from "modules/auth/pages/Login";
import LessonPlan from "modules/lessonPlan/pages/LessonPlan";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import RestrictedRoutes from "./RestrictedRoutes";
import routes from "./routePaths";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={routes.LessonPlan} element={<LessonPlan />} />
          <Route path={routes.Grades} element={<div>Oceny</div>} />
          <Route path={routes.Attendance} element={<div>Obecności</div>} />
          <Route path={routes.Messages} element={<div>Wiadomości</div>} />
        </Route>
        <Route element={<RestrictedRoutes />}>
          <Route path={routes.Login} element={<Login />} />
          <Route path={routes.Register} element={<div>register page</div>} />
          <Route
            path={routes.RemindPassword}
            element={<div>remind password page</div>}
          />
        </Route>
        <Route path="*" element={<Navigate replace to={routes.Login} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
