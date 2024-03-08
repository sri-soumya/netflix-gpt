import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchPage: false,
    gptMovieNames: null,
    gptMovieResults: null,
    showGptLoader: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearchPage = !state.showGptSearchPage;
    },
    setGptResults: (state, action) => {
      state.gptMovieNames = action.payload.gptMovieNames;
      state.gptMovieResults = action.payload.gptMovieResults;
    },
    clearGptResults: (state) => {
      state.gptMovieNames = null;
      state.gptMovieResults = null;
    },
    setShowGptLoader: (state, action) => {
      state.showGptLoader = action.payload;
    },
  },
});

export const {
  toggleGptSearchView,
  setGptResults,
  clearGptResults,
  setShowGptLoader,
} = gptSlice.actions;
export default gptSlice.reducer;
