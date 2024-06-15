import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.account.authenticated);
  return isAuthenticated ? element : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
