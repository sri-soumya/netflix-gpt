import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import { configureStore } from "@reduxjs/toolkit";
import gptSlice from "./gptSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    gpt: gptSlice,
  },
});
export default store;
