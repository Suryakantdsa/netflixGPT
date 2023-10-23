import React, { useRef, useState } from "react";
import Header from "./Header";
import { useCheckValidate } from "../utils/useCheckValidate";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]=useState(null)
  const email=useRef(null)
  const password=useRef(null)
  const fullname=useRef(null)
const handleButtonCLick=()=>{
    const message=useCheckValidate(email.current.value,password.current.value)
    setErrorMessage(message)
    console.log(message)
    if(isSignInForm){
        console.log(email.current.value,"-",password.current.value)
    }
    else{
        console.log(email.current.value,"-",password.current.value," ", fullname.current.value)

    }
}

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background-img"
        />
      </div>
      <form 
      onSubmit={(e)=>e.preventDefault()}
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
