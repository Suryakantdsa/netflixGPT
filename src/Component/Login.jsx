import React, { useRef, useState } from "react";
import Header from "./Header";
import { useCheckValidate } from "../hooks/useCheckValidate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { BACKGROUND_IMG, PROFILE_AVATAR } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const handleButtonCLick = () => {
    setErrorMessage(null);
    const message = useCheckValidate(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (!isSignInForm) {
      //sign up user with email,password and fullname
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: fullname.current.value,
            photoURL: PROFILE_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              alert("Account created sucessfully...👍👍");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " + " + errorMessage);
        });
    } else {
      // sigin with email and password
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " + " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMG} alt="background-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12  right-0 left-0 bg-black bg-opacity-80 my-28 mx-auto text-white rounded-lg p-12">
        <h1 className="text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="w-full  p-4 my-4 bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="w-full  p-4 my-4 bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full  p-4 my-4 bg-gray-700"
        />
        <button
          onClick={handleButtonCLick}
          className="w-full p-4 my-6 bg-red-600 font-bold rounded-sm">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {<p className="p-2 text-red-500 font-bold "> {errorMessage}</p>}
        <p
          className="text-gray-400 cursor-pointer"
          onClick={() => setisSignInForm(!isSignInForm)}>
          {!isSignInForm ? (
            <>
              New to Netflix ?
              <span className="font-bold text-white"> Sign Up now</span>
            </>
          ) : (
            <>
              Already have Account ?
              <span className="font-bold text-white"> Sign In now</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
