import { useState } from "react";
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sign from "../Backend/SupaSignup";
import { useDispatch } from "react-redux";
import { toggleauthenticated } from "../store/account";
function Signup() {
  const dispatch=useDispatch();
  const [alreadyExist, setAlreadyExist] = useState(false);
  const [passlength,setpasslength]=useState(false)
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/signin");
  };
  const isPasswordValid = (password) => {
    setpasslength(true)
    return password.length >= 6;
  };

  async function submit(e) {
    e.preventDefault();

    if (!isPasswordValid(pass)) {
      console.error(
        "Signup error: Password must be at least 6 characters long"
      );
      return;
    }
    setpasslength(false)
    try {
      await Sign({ email, password: pass });
      dispatch(toggleauthenticated(true))
      navigate('/dashboard')
      console.log("Signup successful");
      setAlreadyExist(false);
    } catch (error) {
      dispatch(toggleauthenticated(false))
      if (error.message === "User already registered") {
        setAlreadyExist(true);
      }
      console.error("Signup error:", error.message);
    }
  }
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  return (
    <div className="flex items-center justify-center w-full h-full p-10">
      <div className="main bg-white rounded-lg shadow-md p-12 transition-transform w-[400px] text-center">
        <h1 className="text-sky-600 text-3xl">Welcome</h1>
        <h3 className="text-lg">Enter your signup credentials</h3>
        <Form onSubmit={submit}>
          <label
            htmlFor="email"
            className="block mt-4 mb-2 text-left text-gray-700 font-bold"
          >
            Email:
          </label>
          <input
            onChange={(e) => setemail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            className="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-400"
            required
          />
          {alreadyExist && (
            <p className="text-red-500  mb-5">
              User already registered
            </p>
          )}
          <label
            htmlFor="password"
            className="block mb-2 text-left text-gray-700 font-bold"
          >
            Password:
          </label>
          <input
            onChange={(e) => setpass(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            className="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-400"
            required
          />
          {passlength && (
            <p className="text-red-500  mb-5">
              Password should be more than 6 charachters
            </p>
          )}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-sky-600 text-white py-3 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-sky-500"
            >
              Submit
            </button>
          </div>
        </Form>
        <p className="mt-4">
          Registered?{" "}
          <a
            onClick={handleLoginClick}
            className="text-blue-500 hover:underline"
            style={{ cursor: "pointer" }} // Ensures the cursor shows as a pointer
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
