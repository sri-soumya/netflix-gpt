import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES_API } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popular);
  const fetchPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && fetchPopularMovies();
  }, []);
};

export default usePopularMovies;
