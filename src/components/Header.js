import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../utils/signUpOrSignInUser";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/constants";
import { clearGptResults, toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearchPage = useSelector((store) => store.gpt.showGptSearchPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="flex justify-between items-center z-20 w-screen absolute px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-44" alt="logo" src={NETFLIX_LOGO} />
      {user && (
        <div className="flex items-center">
          <button
            className="py-2 px-4 my-2 mx-6 bg-purple-800 text-white rounded-lg"
            onClick={() => {
              dispatch(toggleGptSearchView());
              dispatch(clearGptResults());
            }}
          >
            {showGptSearchPage ? "Home" : "GPT Search"}
          </button>
          <img className="w-12 h-12" alt="usericon" src={USER_LOGO} />
          <button
            className="py-2 px-4 my-2 mx-6 bg-red-800 text-white rounded-lg"
            onClick={() => {
              signOutUser();
              dispatch(removeUser());
              navigate("/");
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
