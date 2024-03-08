import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSimilarMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useSimilarMovies = (movieId) => {
  const dispatch = useDispatch();
  const fetchSimilarMovies = async () => {
    if (!movieId) return;
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSimilarMovies(json.results));
  };

  useEffect(() => {
    fetchSimilarMovies();
  }, [movieId]);
};

export default useSimilarMovies;
