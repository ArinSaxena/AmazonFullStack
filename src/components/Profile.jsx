import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeCurrentUser } from "utility/authSlice";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData?.username);

  const handleLogout = () =>{
    dispatch(removeCurrentUser());
    navigate('/login')

  }
  return (
    <div>
      <h1> User Profile</h1>
      <h2>Hii {user}</h2>
      <div onClick={handleLogout}>Logout</div>
    </div>
  );
};

export default Profile;


