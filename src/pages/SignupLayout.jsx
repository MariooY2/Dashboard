import Signup from "../components/Signup"

function SignupLayout() {
    return (
        <div className="h-full sm:h-screen bg-sky-200 ">
      <div className="flex sm:flex-row-reverse flex-wrap h-full w-full justify-center items-center">
        
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Signup />
        </div>
        <div className=" w-full h-full sm:w-2/5 sm:h-1/2 flex items-center justify-center pb-10">
          <img
            src="../public/signup.png"
            alt="signin"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
    )
}

export default SignupLayout
