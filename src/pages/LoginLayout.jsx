import Login from "../components/Login";
import { useSelector } from "react-redux";
function LoginLayout() {


  return (
    <div className="h-full sm:h-screen bg-sky-200 ">
      <div className="flex flex-wrap h-full w-full justify-center items-center">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Login />
        </div>
        <div className=" w-full h-full sm:w-2/5 sm:h-1/2 flex items-center justify-center pb-10">
          <img
            src="../public/draw2.webp"
            alt="signin"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
