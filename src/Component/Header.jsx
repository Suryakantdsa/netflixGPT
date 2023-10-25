import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO, PROFILE_AVATAR } from "../utils/constant";
import { addUser, removeUser } from "../store/userSlice";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user = useSelector((store) => store.user);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSignOut=(e)=>{
   if(e.target.value==="Signout"){
    signOut(auth).then(() => {
    
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
   }
  }
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });

    return ()=>unsubscribe()

  }, []);

  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-full p-4 flex justify-between items-center">
      <div>
        <img
          className="w-44"
          src={LOGO}
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
              src={PROFILE_AVATAR}
              alt="User Icon"
            />
            <span className="font-bold text-xl text-white pl-4 cursor-pointer">{user.displayName}</span>
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
