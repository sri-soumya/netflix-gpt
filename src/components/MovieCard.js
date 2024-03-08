import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ path }) => {
  if (!path) return;
  return (
    <div className="w-48 pr-4 cursor-pointer">
      <img src={IMG_CDN + path} />
    </div>
  );
};

export default MovieCard;
