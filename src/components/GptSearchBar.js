import React, { useRef } from "react";
import gemini from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setGptResults, setShowGptLoader } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchQuery = useRef(null);
  const dispatch = useDispatch();

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearchSubmit = async () => {
    dispatch(setShowGptLoader(true));
    const prompt =
      "Act as a movie recommender system. Suggest 5 movies for the given prompt: " +
      searchQuery.current.value +
      ". The output should be comma separated and should start with a capital letter if needed. For example- gadar,pk,dune,harry potter,fast and furious.";
    const result = await gemini.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const movieNames = text.split(",");
    const movieResultsPromise = movieNames.map((movie) => searchMovie(movie));
    const movieResults = await Promise.all(movieResultsPromise);
    dispatch(
      setGptResults({
        gptMovieNames: movieNames,
        gptMovieResults: movieResults,
      })
    );
    dispatch(setShowGptLoader(false));
  };

  return (
    <div
      className=" z-100 pt-[10%] flex justify-center rounded-lg"
      onSubmit={(e) => e.preventDefault()}
    >
      <form className="w-1/2 rounded-lg bg-black grid grid-cols-12">
        <input
          ref={searchQuery}
          type="text"
          placeholder="What would you like to watch today?"
          className="p-4 m-4 col-span-9"
        />
        <button
          onClick={handleSearchSubmit}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
