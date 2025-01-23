import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeCurrentUser } from "utility/authSlice";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData?.username);

  const handleLogout = () => {
    dispatch(removeCurrentUser());
    const refreshToken = localStorage.getItem('refreshToken');
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    axios.post('http://localhost:6061/delete', { token: refreshToken })
        .then(response => {
            // navigate('/login');
        })
        .catch(err => console.error(err))
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800">User Profile</h1>
        <h2 className="mt-4 text-lg text-center text-gray-600">
          Hi, <span className="font-semibold text-blue-600">{user}</span>
        </h2>
        <div className="flex flex-col mt-6">
          <button
            onClick={handleLogout}
            className="py-2 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          >
            Logout
          </button>
          <Link
            to="/"
            className="mt-4 text-center text-sm text-gray-500 hover:text-gray-700"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
