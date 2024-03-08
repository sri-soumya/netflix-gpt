import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlaying);
  const topRatedMovies = useSelector((store) => store.movies.topRated);
  const upcomingMovies = useSelector((store) => store.movies.upcoming);
  const popularMovies = useSelector((store) => store.movies.popular);

  return (
    <div className="bg-black pb-2">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={topRatedMovies} />
      <MovieList title={"Popular"} movies={popularMovies} />
      <MovieList title={"Upcoming"} movies={upcomingMovies} />

      {/* <MovieList /> */}
    </div>
  );
};

export default SecondaryContainer;
