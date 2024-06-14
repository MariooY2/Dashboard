import LoginLayout from "./pages/LoginLayout"
import SignupLayout from "./pages/SignupLayout"
import Dashboard from "./pages/Dashboard";
import { RouterProvider, createBrowserRouter , Navigate} from "react-router-dom";
function App() {

const router =createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />
  },{
    path:"/signin",
    element:<LoginLayout/>
  },{
    path:"/signup",
    element:<SignupLayout/>
  },{
    path:"/Dashboard",element:<Dashboard/>
  }
])
  return (
    <>
 <RouterProvider router={router} />
    </>
  )
}

export default App
