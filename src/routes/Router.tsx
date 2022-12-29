import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routePaths";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.Base} element={null} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
