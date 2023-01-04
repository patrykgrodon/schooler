import Login from "modules/pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import routes from "./routePaths";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={routes.Base} element={<div>Base</div>} />
        </Route>
        <Route path={routes.Login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
