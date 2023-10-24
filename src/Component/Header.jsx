import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate=useNavigate()
  const user = useSelector((store) => store.user);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSignOut=(e)=>{
   if(e.target.value==="Signout"){
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
      alert(error)
    });
   }
  }

  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-full p-4 flex justify-between items-center">
      <div>
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
      </div>
      {user && (
        <div className="relative mr-4">
          <div
            className="flex items-center"
            onClick={toggleDropdown}>
            <img
              className="w-12 h-12 rounded-full cursor-pointer"
              src="https://avatars.githubusercontent.com/u/118671953?v=4"
              alt="User Icon"
            />
            <span className="font-bold text-xl pl-4 cursor-pointer">{user.displayName}</span>
          </div>
          {isDropdownOpen && (
            <select
              name="signout"
              id="signout"
              className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg text-black"
              onChange={handleSignOut}
              >
    
              <option value="MyProfile" className="py-2 px-4">
                My Profile
              </option>
              <option value="Signout" className="py-2 px-4">
                Signout
              </option>
            </select>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
