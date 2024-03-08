import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkValidEmailAndPassword } from "../utils/validation";
import { signUpOrSignInUser } from "../utils/signUpOrSignInUser";
import { useSelector } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validEmailAndPasswordMessage, setValidEmailAndPasswordMessage] =
    useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);

  const user = useSelector((store) => store.user);

  const handleFormSubmit = async () => {
    const validEmailAndPassword = checkValidEmailAndPassword(
      email.current.value,
      password.current.value
    );
    setValidEmailAndPasswordMessage(validEmailAndPassword);
    if (validEmailAndPassword) return;

    const error = await signUpOrSignInUser(
      email.current.value,
      password.current.value,
      isSignInForm,
      displayName?.current?.value
    );
    setValidEmailAndPasswordMessage(error);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="scale-y-125"
          alt="bg-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-black px-12 py-8 mx-auto right-0 left-0 top-[125px] text-white bg-opacity-80"
      >
        <h1 className="text-3xl py-4 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={displayName}
            className="p-3 my-4 w-full bg-gray-950 border border-white rounded-md"
            type="text"
            placeholder="Name"
          />
        )}

        <input
          ref={email}
          className="p-3 my-4 w-full bg-gray-950 border border-white rounded-md"
          type="text"
          placeholder="Email or phone number"
        />
        <input
          ref={password}
          className="p-3 my-4 w-full bg-gray-950 border border-white rounded-md"
          type="password"
          placeholder="Password"
        />
        {validEmailAndPasswordMessage}
        <button
          className="p-3 my-6 bg-red-700 w-full rounded-md"
          onClick={handleFormSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 text-center cursor-pointer hover:underline"
          onClick={() => {
            setIsSignInForm(!isSignInForm);
          }}
        >
          {isSignInForm
            ? "New to NetflixGPT? Sign Up now."
            : "Already registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
