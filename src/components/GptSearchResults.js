import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchResults = () => {
  const { gptMovieNames, gptMovieResults } = useSelector((store) => store.gpt);
  if (!gptMovieResults) return;
  return (
    <div className="bg-black opacity-90 mt-56">
      {gptMovieNames.map((movieName, index) => (
        <MovieList title={movieName} movies={gptMovieResults[index]} />
      ))}
    </div>
  );
};

export default GptSearchResults;
