import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCast } from "../utils/moviesSlice";

const useGetMovieCredits = (movieId) => {
  const dispatch = useDispatch();
  const fetchMovieCredits = async () => {
    if (!movieId) return;
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      API_OPTIONS
    );
    const json = await data.json();
    const cast = json.cast.map((item) => item.original_name);
    dispatch(addCast(cast));
  };
  useEffect(() => {
    fetchMovieCredits();
  }, [movieId]);
};

export default useGetMovieCredits;
