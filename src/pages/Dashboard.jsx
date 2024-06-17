import { NavLink, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useSelector } from "react-redux";
import { ReadImage } from "../Backend/UploadImage";
import { useDispatch } from "react-redux";
import { setimage } from "../store/account";

function calculateDaysFromCreation(dateString) {
  const creationDate = new Date(dateString);
  const today = new Date();
  const timeDiff = today - creationDate;
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  if (daysDiff==-1) return 0
  return daysDiff;
}

function Dashboard() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.account.email);
  const createdAt = useSelector((state) => state.account.data.user.created_at);

  const daysSinceCreation = calculateDaysFromCreation(createdAt);

  const fetchImage = async () => {
    const imageData = await ReadImage(email);

    if (imageData === false) {
      console.log("No picture");
    } else {
      dispatch(setimage(imageData));
    }
  };
  fetchImage();

  const Data = useSelector((state) => state.account.data.user);
  const FullName = Data.user_metadata.FullName;
  const pic = useSelector((state) => state.account.image);
  const is= (pic==="123")
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between h-24 bg-white shadow px-4">
          <div className="font-bold text-lg">Welcome Back {FullName} your account is {daysSinceCreation} {daysSinceCreation===1?'day':'days'} old</div>
      
          <div className="relative flex items-center justify-center h-full">
            <NavLink to="profile">
              {is?<img
                src="https://xmjkcphldqqnggvngfbz.supabase.co/storage/v1/object/public/test/avatar1.avif"
                alt="Avatar"
                className="w-20 h-20 rounded-full mr-5"
              />:<img
                src={pic}
                alt="Profile"
                className="w-20 h-20 rounded-full mr-5"
              />}
              
            </NavLink>
          </div>
        </header>
        {/* Main */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
