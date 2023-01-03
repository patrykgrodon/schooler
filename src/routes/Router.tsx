import Layout from "common/components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routePaths";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={routes.Base} element={<Login />} /> */}
        <Route path={routes.Base} element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
