export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_LOGO =
  "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const NOW_PLAYING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const POPULAR_MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?page=1";
export const TOP_RATED_MOVIES_API =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";
export const UPCOMING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";
export const GENRE_API = "https://api.themoviedb.org/3/genre/movie/list";

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;
