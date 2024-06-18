import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleauthenticated } from "../store/account";
import { cleardata, clearimage } from "../store/account";
import logoutUser from "../Backend/logout";
function SideBar() {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.account.image);
  console.log(image)

   function handleLogout() {
    dispatch(cleardata());
    dispatch(clearimage());
    dispatch(toggleauthenticated(false));
    logoutUser();
    console.log(isAuthenticated);
  }

  return (
    <div className="lg:w-[150px] w-[110px] bg-white shadow-lg">
      <div className="lg:h-16 h-13 flex items-center justify-center font-bold lg:text-2xl text-xl mt-5">
        Dashboard
      </div>
      <div className=" flex flex-col items-center justify-center">
        <nav className="mt-10 flex flex-col items-center justify-center lg:gap-28 gap-12">
          <NavLink
            to="/dashboard/home"
            className={({ isActive }) =>
              `block py-2.5 lg:px-12 px-9 rounded  hover:bg-sky-200 ${
                isActive ? "bg-sky-300" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `block py-2.5 lg:px-12 px-8 rounded  hover:bg-sky-200 ${
                isActive ? "bg-sky-300" : ""
              }`
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `block py-2.5 lg:px-12 px-7 rounded  hover:bg-sky-200 ${
                isActive ? "bg-sky-300" : ""
              }`
            }
          >
            Settings
          </NavLink>
          <a
            onClick={handleLogout}
            className="block py-2.5 lg:px-12 px-8 rounded transition duration-200 hover:bg-red-800 cursor-pointer"
          >
            Logout
          </a>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
