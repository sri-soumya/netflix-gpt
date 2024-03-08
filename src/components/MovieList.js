import React from "react";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { addMoreInfoMovie } from "../utils/moviesSlice";

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();
  if (!movies) return;

  const handleMovieCardClick = (movie) => {
    dispatch(addMoreInfoMovie(movie));
  };

  return (
    <div className="mb-48 bg-black">
      <div className="-mt-48 pl-12 bg-transparent relative z-30">
        <h1 className="text-3xl py-6 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movies.map((movie) => (
              <div key={movie.id} onClick={() => handleMovieCardClick(movie)}>
                <MovieCard path={movie.poster_path} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
