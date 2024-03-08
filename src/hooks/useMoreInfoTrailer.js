import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMoreInfoTrailer } from "../utils/moviesSlice";

const useMoreInfoTrailer = (movieId) => {
  const dispatch = useDispatch();

  const fetchMovieInfo = async () => {
    if (!movieId) return;

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const trailers = json?.results?.filter((video) => video.type === "Trailer");
    const trailer = trailers ? trailers[0] : json[0];

    dispatch(addMoreInfoTrailer(trailer));
  };

  useEffect(() => {
    fetchMovieInfo();
  }, [movieId]);
};

export default useMoreInfoTrailer;
