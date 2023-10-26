import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO, PROFILE_AVATAR } from "../utils/constant";
import { addUser, removeUser } from "../store/userSlice";
import { toggleGPTpage } from "../store/gptSlice";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isGptSearchClicked = useSelector((store) => store.gpt.isGPTClicked);

  const handleSignOut = (e) => {
    console.log("sign lot");
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  const handleToggleClick = () => {
    dispatch(toggleGPTpage());
  };
  const toggleLanguageDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
    setIsDropdownOpen(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsLangDropdownOpen(false);
  };
  const handleLanguageChange = () => {};

  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-full p-4 flex justify-between items-center">
      <div>
        <img className="w-44" src={LOGO} alt="Netflix Logo" />
      </div>
      {user && (
        <div className="relative mr-4 flex justify-between items-center w-[35%] text-white">
          <div className="relative LANGUAGE BUTTON">
            <button
              className="bg-pink-500 py-2 w-36  hover:bg-pink-400"
              onClick={toggleLanguageDropdown}>
              <i className="fa-solid fa-globe pr-2"></i>Language
              <i
                className={`pl-2 fa-solid ${
                  isLangDropdownOpen ? "fa-caret-up" : "fa-caret-down"
                }`}></i>{" "}
            </button>
            {isLangDropdownOpen && (
              <div className="absolute mt-2 w-36 shadow-lg bg-white ">
                <div className="flex flex-col">
                  {/* List of languages */}
                  <button
                    className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleLanguageChange("English")}>
                    English
                  </button>
                  <button
                    className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleLanguageChange("Odia")}>
                    Odia
                  </button>
                  {/* Add more language options as needed */}
                </div>
              </div>
            )}
          </div>
          <button
            className="bg-purple-800 px-4 py-2 rounded-md hover:bg-purple-500"
            onClick={handleToggleClick}>
            {isGptSearchClicked ? (
              "Homepage"
            ) : (
              <>
                GPTsearch
                <i className="fa-solid fa-magnifying-glass pl-2"></i>
              </>
            )}
          </button>
          <div className="relative SIGNOUT DIV">
            <div
              className="flex items-center PROFILEPIC w-52"
              onClick={toggleDropdown}>
              <img
                className="w-12 h-12 rounded-full cursor-pointer"
                src={PROFILE_AVATAR}
                alt="User Icon"
              />
              <span className="font-bold text-xl text-white pl-4 cursor-pointer">
                {user.displayName}
              </span>
            </div>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-36 left-14  shadow-lg bg-white ">
                <div className="flex flex-col">
                  {/* List of languages */}
                  <button
                    className=" px-4 py-2  text-gray-700 hover:bg-gray-100"
                    onClick={() => handleLanguageChange("English")}>
                    My Profile
                  </button>
                  <button
                    className=" px-4 py-2  text-gray-700 hover:bg-gray-100"
                    onClick={handleSignOut}>
                    Signout
                  </button>
                  {/* Add more language options as needed */}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
