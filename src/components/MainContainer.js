import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MainContainer = () => {
  const nowPlayingMovies = useSelector((store) => store?.movies?.nowPlaying);
  const mainMovie = nowPlayingMovies ? nowPlayingMovies[0] : null;
  useMovieTrailer(mainMovie?.id);
  const trailer = useSelector((store) => store.movies.movieTrailer);
  if (!nowPlayingMovies) return;
  const { title, overview } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground trailer={trailer} />
    </div>
  );
};

export default MainContainer;
