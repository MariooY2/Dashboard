import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useSelector } from "react-redux";
function Dashboard() {
  const Data = useSelector((state) => state.account.data.user);
  const FullName = Data.user_metadata.FullName;
  const pic = useSelector((state) => state.account.image);
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between h-24 bg-white shadow px-4">
          <div className="font-bold text-lg">Welcome Back {FullName}</div>
        
           
       
          <div className="relative flex items-center justify-center h-full">
          <img
              src={pic}
              alt="Profile"
              className="w-20 h-20 rounded-full mr-5"
            />
           
          </div>
        </header>
        {/* Main */}
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
