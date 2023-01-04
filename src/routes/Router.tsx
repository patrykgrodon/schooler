import Login from "modules/pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import RestrictedRoutes from "./RestrictedRoutes";
import routes from "./routePaths";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={routes.Base} element={<div>Base</div>} />
        </Route>
        <Route element={<RestrictedRoutes />}>
          <Route path={routes.Login} element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
