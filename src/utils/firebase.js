import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflixgpt-930ce.firebaseapp.com",
  projectId: "netflixgpt-930ce",
  storageBucket: "netflixgpt-930ce.appspot.com",
  messagingSenderId: "208891869261",
  appId: "1:208891869261:web:ec449f8b23e7da2ac7c404",
  measurementId: "G-CTNV22DP69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
