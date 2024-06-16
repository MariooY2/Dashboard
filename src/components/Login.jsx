import Sign from "../Backend/SupaSignin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleauthenticated } from "../store/account";
import { savedata, cleardata,setemail as Set } from "../store/account";

function Login() {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  
  const handleSignup = () => {
    navigate("/signup");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !pass) return;

    try {
      const data = await Sign({ email, password: pass });
      dispatch(savedata(data));
      dispatch(toggleauthenticated(true));
      dispatch(Set(email))
      navigate("/dashboard");
    } catch (error) {
      dispatch(cleardata());
      dispatch(toggleauthenticated(false));
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full p-10">
      <div className="main bg-white rounded-lg shadow-md p-12 transition-transform w-[400px] text-center">
        <h1 className="text-sky-600 text-3xl">Welcome Back</h1>
        <h3 className="text-lg">Enter your login credentials</h3>
        <Form onSubmit={handleSubmit}>
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
          {errorMessage && <p className="text-red-500  mb-6">{errorMessage}</p>}
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
          Not registered?{" "}
          <a
            onClick={handleSignup}
            className="text-blue-500 hover:underline"
            style={{ cursor: "pointer" }}
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
