import Attendance from "modules/attendance/pages/Attendance";
import {
  LoginForm,
  RegisterForm,
  RemindPasswordForm,
} from "modules/auth/components";
import Classes from "modules/classes/pages/Classes";
import Grades from "modules/grades/pages/Grades";
import LessonPlan from "modules/lessonPlan/pages/LessonPlan";
import Messages from "modules/messages/pages/Messages";
import Students from "modules/students/pages/Students";
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
          <Route path={routes.Grades} element={<Grades />} />
          <Route path={routes.Attendance} element={<Attendance />} />
          <Route path={routes.Messages} element={<Messages />} />
          <Route path={routes.Classes} element={<Classes />} />
          <Route path={routes.Students} element={<Students />} />
          <Route path={routes.Subjects} element={<div>Przedmioty</div>} />
          <Route path={routes.Teachers} element={<div>Nauczyciele</div>} />
        </Route>
        <Route element={<RestrictedRoutes />}>
          <Route path={routes.Login} element={<LoginForm />} />
          <Route path={routes.Register} element={<RegisterForm />} />
          <Route
            path={routes.RemindPassword}
            element={<RemindPasswordForm />}
          />
        </Route>
        <Route path="*" element={<Navigate replace to={routes.Login} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
