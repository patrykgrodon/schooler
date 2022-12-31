import Login from "modules/pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routePaths";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.Base} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
