import React, { useState, useEffect } from "react";
import updateUser from "../Backend/UpdateUser";
import logoutUser from "../Backend/logout";
import { useDispatch, useSelector } from "react-redux";
import { toggleauthenticated } from "../store/account";
import { cleardata, clearimage } from "../store/account";

function DashboardSettings() {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(cleardata());
    dispatch(clearimage());
    dispatch(toggleauthenticated(false));
    logoutUser();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("Settings Updated:", { fullname, password });

    const response = await updateUser(password, fullname);
    if (response.success) {
      handleLogout();
      setMessage("Profile updated successfully!");
    } else {
      setMessage(`Failed to update profile: ${response.error}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Change Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fullname"
            className="block text-gray-700 font-medium mb-2"
          >
            Full Name:
          </label>
          <input
            type="text"
            id="fullname"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Save Settings
        </button>
      </form>
      {message && (
        <div className="mt-4 p-2 text-center text-white bg-green-500 rounded-md">
          {message}
        </div>
      )}
    </div>
  );
}

export default DashboardSettings;
