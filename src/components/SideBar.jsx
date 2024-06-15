import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleauthenticated } from "../store/account";

function SideBar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.account.authenticated);
  function handleLogout() {
    dispatch(toggleauthenticated(false));
    console.log(isAuthenticated);
  }

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="h-16 flex items-center justify-center font-bold text-2xl">
        Dashboard
      </div>
      <div className=" flex flex-col items-center justify-center">
        <nav className="mt-10 flex flex-col items-center justify-center gap-28">
          <NavLink
            to="/dashboard/home"
            className={({ isActive }) =>
              `block py-2.5 px-12 rounded  hover:bg-sky-200 ${
                isActive ? "bg-sky-300" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `block py-2.5 px-12 rounded  hover:bg-sky-200 ${
                isActive ? "bg-sky-300" : ""
              }`
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `block py-2.5 px-12 rounded  hover:bg-sky-200 ${
                isActive ? "bg-sky-300" : ""
              }`
            }
          >
            Settings
          </NavLink>
          <a
            onClick={handleLogout}
            className="block py-2.5 px-12 rounded transition duration-200 hover:bg-red-800 cursor-pointer"
          >
            Logout
          </a>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
