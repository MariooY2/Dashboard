import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useSelector } from "react-redux";
function Dashboard() {
    const Data=useSelector((state)=>state.account.data)
    console.log(Data)
    return (
        <div className="flex h-screen bg-gray-100">
           
          <SideBar/>
           
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="flex items-center justify-between h-16 bg-white shadow px-4">
                    <div className="font-bold text-lg">Dashboard</div>
                    <div className="relative">
                        <input
                            type="text"
                            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            placeholder="Search..."
                        />
                        <svg
                            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            fill="currentColor"          
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.9 14.32a8 8 0 111.42-1.42l4.49 4.49-1.42 1.42-4.49-4.49zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </header>
                {/* Main */}
                <Outlet/>
            </div>
        </div>
    );
}

export default Dashboard;

