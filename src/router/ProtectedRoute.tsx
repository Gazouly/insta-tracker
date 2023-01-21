import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import ProtectedLayout from "@layouts/ProtectedLayout";

const ProtectedRoute = () => {
  const [isAuthenticated] = useState(true);

  return isAuthenticated ? (
    <ProtectedLayout>
      <Outlet />
    </ProtectedLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
