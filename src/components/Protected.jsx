import { Navigate } from "react-router-dom";
import { useAuth } from "../customHooks/AuthProvider";
// Protected Route Component
export const ProtectedRoute = ({ children }) => {
  const user = useAuth();
  if (!user.currentUser) {
    // user is not authenticated
    return <Navigate to="/signup" />;
  }
  return children;
};
