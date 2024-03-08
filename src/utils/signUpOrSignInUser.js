import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import store from "./store";
import { addUser } from "./userSlice";

export const signUpOrSignInUser = async (
  email,
  password,
  isSignInForm,
  displayName
) => {
  let errorCodeMessage = null;
  if (!isSignInForm) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: displayName,
        })
          .then(() => {
            const { uid, email, displayName } = auth.currentUser;
            store.dispatch(
              addUser({ uid: uid, email: email, displayName: displayName })
            );
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        errorCodeMessage = (
          <p className="text-red-600 text-sm">
            {errorCode + "- " + errorMessage}
          </p>
        );
      });
  } else {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        errorCodeMessage = (
          <p className="text-red-600 text-sm">
            {errorCode + "- " + errorMessage}
          </p>
        );
      });
  }
  return errorCodeMessage;
};

export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
