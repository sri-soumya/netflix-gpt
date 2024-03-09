import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
import MoreInfo from "./MoreInfo";
import useGenre from "../hooks/useGenre";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularMovies();
  useGenre();
  const showGptSearchPage = useSelector((store) => store.gpt.showGptSearchPage);

  return (
    <div className="">
      <Header />
      <MoreInfo />
      {showGptSearchPage && <GptSearchPage />}
      {!showGptSearchPage && (
        <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
