import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LANGUAGE_SUPPORTED, LOGO, PROFILE_AVATAR } from "../utils/constant";
import { addUser, removeUser } from "../store/userSlice";
import { toggleGPTpage } from "../store/gptSlice";
import { changeLanguage } from "../store/appConfigSlice";
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
  const handleLanguageChange = (lang) => {
    setIsLangDropdownOpen(false);
    dispatch(changeLanguage(lang));
  };

  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-full p-4 flex sm:justify-between  flex-col md:flex-row bg-black md:bg-transparent items-center text-base">
      <div>
        <img className="w-44" src={LOGO} alt="Netflix Logo" />
      </div>
      {user && (
        <div className="relative md:mr-4 flex sm:justify-between justify-center items-center text-white text-base">
          {isGptSearchClicked && (
            <div className="relative LANGUAGE BUTTON pr-4">
              <button
                className="bg-pink-500 md:py-2 sm:w-36  py-1 w-14 hover:bg-pink-400"
                onClick={toggleLanguageDropdown}>
                <i className="fa-solid fa-globe pr-2"></i>
                <span className="sm:inline-block hidden">Language</span>
                <i
                  className={`pl-2 fa-solid ${
                    isLangDropdownOpen ? "fa-caret-up" : "fa-caret-down"
                  }`}></i>{" "}
              </button>
              {isLangDropdownOpen && (
                <div className="absolute mt-2 md:w-36 w-32 shadow-lg bg-white ">
                  <div className="flex flex-col">
                    {/* List of languages */}
                    {LANGUAGE_SUPPORTED?.lang.map((language) => {
                      return (
                        <button
                          key={language}
                          className=" md:px-4 md:py-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => handleLanguageChange(language)}>
                          {language}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
          <button
            className=" GPTsearch BUTTON 
           bg-purple-800 sm:px-4 sm:py-2 px-1 py-1 rounded-sm md:rounded-md hover:bg-purple-600"
            onClick={handleToggleClick}>
            {isGptSearchClicked ? (
              "Homepage"
            ) : (
              <>
                Try GPTsearch
                <i className="fa-solid fa-magnifying-glass pl-2"></i>
              </>
            )}
          </button>
          <div className="relative SIGNOUT DIV pl-4">
            <div
              className="flex items-center PROFILEPIC md:w-52 w-40"
              onClick={toggleDropdown}>
              <img
                className="md:w-12 md:h-12 w-8 h-8 rounded-full cursor-pointer"
                src={PROFILE_AVATAR}
                alt="User Icon"
              />
              <span className="font-bold sm:text-xl text-white sm:pl-4 pl-1 cursor-pointer">
                {user.displayName}
              </span>
            </div>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-36 md:left-20  left-8 shadow-lg bg-white ">
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
