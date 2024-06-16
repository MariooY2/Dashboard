import { NavLink, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useSelector } from "react-redux";
import { ReadImage } from "../Backend/UploadImage";
import { useDispatch } from "react-redux";
import { setimage } from "../store/account";
function Dashboard() {
    const dispatch=useDispatch()
    const email=useSelector((state)=>state.account.email)
    const fetchImage = async () => {
        const imageData = await ReadImage(email);
    
        if (imageData === false) {
          console.log("No picture");
        } else {
          dispatch(setimage(imageData));

        }
      };
      fetchImage()


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
          <NavLink to="profile">
            <img
              src={pic}
              alt="Profile"
              className="w-20 h-20 rounded-full mr-5"
            />
          </NavLink>
           
          </div>
        </header>
        {/* Main */}
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
