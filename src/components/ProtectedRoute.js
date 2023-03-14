import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
