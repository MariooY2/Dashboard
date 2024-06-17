import Login from "../components/Login";
import image from "../images/draw2.webp";
import Spinner from "../UI/Spinner";
import { useState } from "react";
function LoginLayout() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="h-full sm:h-screen bg-sky-200">
      <div className="flex flex-wrap h-full w-full justify-center items-center">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Login />
        </div>
        <div className="w-full h-full sm:w-2/5 sm:h-1/2 flex items-center justify-center pb-10 relative">
          {isLoading && (
            <div className="absolute inset-0 flex justify-center items-center ">
              <Spinner />
            </div>
          )}
          <img
            src={image}
            alt="signin"
            className={`w-full h-full object-cover ${
              isLoading ? "hidden" : "block"
            }`}
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
