import { useDispatch } from 'react-redux';
import { toggle } from '../store/Flip';
import { useNavigate } from "react-router-dom"
function Login() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handleSignup = () => {
    dispatch(toggle())
    navigate('/signup');
  };
  return (
    <div className="flex items-center justify-center w-full h-full p-10">
      <div className="main bg-white rounded-lg shadow-md p-12 transition-transform w-[400px] text-center">
        <h1 className="text-sky-600 text-3xl">Welcome</h1>
        <h3 className="text-lg">Enter your login credentials</h3>
        <form action="">
          <label
            htmlFor="first"
            className="block mt-4 mb-2 text-left text-gray-700 font-bold"
          >
            Username:
          </label>
          <input
            type="text"
            id="first"
            name="first"
            placeholder="Enter your Username"
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
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            className="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-400"
            required
          />
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-sky-600 text-white py-3 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-sky-500"
            >
              Submit
            </button>
          </div>
        </form>
        <p className="mt-4">
          Not registered?{" "}
          <a onClick={handleSignup} className="text-blue-500 hover:underline"  style={{ cursor: 'pointer' }}>
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
