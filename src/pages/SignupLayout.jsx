import Signup from "../components/Signup";
import image from "../images/signup.png";
import { useState } from "react";
import Spinner from "../UI/Spinner";
function SignupLayout() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className="h-full sm:h-screen bg-sky-200">
      <div className="flex sm:flex-row-reverse flex-wrap h-full w-full justify-center items-center">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Signup />
        </div>
        <div className="w-full h-full sm:w-2/5 sm:h-1/2 flex items-center justify-center pb-10 relative">
          {isLoading && (
            <div className="absolute inset-0 flex justify-center items-center">
              <Spinner />
            </div>
          )}
          <img
            src={image}
            alt="signup"
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

export default SignupLayout;
