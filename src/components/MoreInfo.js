import React from "react";
import VideoBackground from "./VideoBackground";
import PopupTitle from "./PopupTitle";
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import useGetMovieCredits from "../hooks/useGetMovieCredits";
import {
  addCast,
  addMoreInfoMovie,
  addMoreInfoTrailer,
  addSimilarMovies,
  addStreamingOptions,
} from "../utils/moviesSlice";
import useMoreInfoTrailer from "../hooks/useMoreInfoTrailer";
import useSimilarMovies from "../hooks/useSimilarMovies";
import MovieList from "./MovieList";
import MoreInfoMovieList from "./MoreInfoMovieList";
import useGetStreamingOptions from "../hooks/useGetStreamingOptions";
import WhereToWatch from "./WhereToWatch";

const MoreInfo = () => {
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.movies.moreInfo);
  const genreId = useSelector((store) => store.movies.genre);
  const movieCast = useSelector((store) => store.movies.cast);
  const similarMovies = useSelector((store) => store.movies.similar);
  useGetMovieCredits(movie?.id);
  useMoreInfoTrailer(movie?.id);
  useSimilarMovies(movie?.id);
  useGetStreamingOptions(movie?.id);

  const trailer = useSelector((store) => store.movies.moreInfoTrailer);
  if (!movie) return;
  let genreNames = null;
  if (genreId) genreNames = movie.genre_ids.map((genre) => genreId[genre]);

  return (
    <div className=" rounded-lg w-2/3 text-white h-[700px] fixed left-0 right-0 z-50 bg-gray-900 text-red mx-auto mt-12 overflow-y-scroll">
      <PopupTitle title={movie.title} />
      <VideoBackground trailer={trailer} />
      <button
        onClick={() => {
          dispatch(addMoreInfoMovie(null));
          dispatch(addCast(null));
          dispatch(addMoreInfoMovie(null));
          dispatch(addMoreInfoTrailer(null));
          dispatch(addSimilarMovies(null));
          dispatch(addStreamingOptions(null));
        }}
        className="bg-black w-10 h-10 text-center font-bold rounded-full absolute top-10 right-10"
      >
        X
      </button>
      <div className="px-12 py-6 flex">
        <div className="w-[55%]">
          <p className="text-gray-200">
            <span className="text-gray-400 text-sm">Release Date: </span>
            {movie.release_date}
          </p>
          <p className="py-4">{movie.overview}</p>
        </div>
        <div className="pl-12 w-[45%]">
          {genreNames && genreNames.length > 0 && (
            <p>
              <span className="text-gray-400 text-sm"> Genres: </span>
              {genreNames.join(", ")}
            </p>
          )}
          {movieCast && movieCast.length > 0 && (
            <p className="py-4">
              <span className="text-gray-400 text-sm">Top Cast: </span>
              {movieCast.slice(0, 5).join(", ")}
            </p>
          )}
        </div>
      </div>
      <WhereToWatch />

      {similarMovies && similarMovies.length > 0 && (
        <MoreInfoMovieList
          title={`More Like ${movie.title}`}
          movies={similarMovies}
        />
      )}
    </div>
  );
};

export default MoreInfo;
