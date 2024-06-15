import LoginLayout from "./pages/LoginLayout";
import SignupLayout from "./pages/SignupLayout";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardHome from "./DashboardChildren/DashboardHome";
import DashboardProfile from "./DashboardChildren/DashboardProfile";
import DashboardSettings from "./DashboardChildren/DashboardSettings";

import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/signin" replace />,
    },
    {
      path: "/signin",
      element: <LoginLayout />,
    },
    {
      path: "/signup",
      element: <SignupLayout />,
    },
    {
      path: "/Dashboard",
      element: <ProtectedRoute element={<Dashboard />} />,
      children: [
        { path: "", element: <Navigate to="home" replace /> },
        { path: "home", element: <DashboardHome /> },
        { path: "settings", element: <DashboardSettings /> },
        { path: "Profile", element: <DashboardProfile /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
