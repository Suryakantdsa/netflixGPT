import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background-img"
        />
      </div>
      <form className="absolute w-3/12  right-0 left-0 bg-black bg-opacity-80 my-28 mx-auto text-white rounded-lg p-12">
        <h1 className="text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full  p-4 my-4 bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="w-full  p-4 my-4 bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full  p-4 my-4 bg-gray-700"
        />
        <button className="w-full p-4 my-6 bg-red-600 font-bold rounded-sm">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
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
