import { useEffect } from "react";
import { API_OPTIONS, GENRE_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addGenre } from "../utils/moviesSlice";

const useGenre = () => {
  const genre = useSelector((store) => store.movies.genre);
  const dispatch = useDispatch();

  const fetchGenre = async () => {
    const data = await fetch(GENRE_API, API_OPTIONS);
    const json = await data.json();
    const genres = {};
    json.genres.forEach((genre) => {
      genres[genre.id] = genre.name;
    });
    dispatch(addGenre(genres));
  };

  useEffect(() => {
    !genre && fetchGenre();
  }, []);
};

export default useGenre;
