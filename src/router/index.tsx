import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import ProtectedRoute from "./ProtectedRoute";

const protectedRoutes = routes.filter(({ isProtected }) => isProtected);
const nonProtectedRoutes = routes.filter(({ isProtected }) => !isProtected);

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<ProtectedRoute />}>
        {protectedRoutes.map(({ element, path }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Route>
      {nonProtectedRoutes.map(({ element, path }) => (
        <Route key={path} element={element} path={path} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default Router;
