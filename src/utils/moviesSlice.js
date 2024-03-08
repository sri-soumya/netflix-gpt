import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    movieTrailer: null,
    popular: null,
    topRated: null,
    upcoming: null,
    genre: null,
    cast: null,
    moreInfo: null,
    moreInfoTrailer: null,
    similar: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popular = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcoming = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addGenre: (state, action) => {
      state.genre = action.payload;
    },
    addCast: (state, action) => {
      state.cast = action.payload;
    },
    addMoreInfoMovie: (state, action) => {
      state.moreInfo = action.payload;
    },
    addMoreInfoTrailer: (state, action) => {
      state.moreInfoTrailer = action.payload;
    },
    addSimilarMovies: (state, action) => {
      state.similar = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMovieTrailer,
  addGenre,
  addCast,
  addMoreInfoMovie,
  addMoreInfoTrailer,
  addSimilarMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
