import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Outlet/>;
  }
  
  return <Navigate to="/login" replace/>;
};

export default ProtectedRoute;