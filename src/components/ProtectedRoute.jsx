
import { Navigate } from 'react-router-dom';

// Mock authentication function, replace with your actual authentication logic
const isAuthenticated = () => {
  // This should be replaced with real authentication check, like checking a token in localStorage
  console.log(1)
  return localStorage.getItem('authToken') !== null;
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
