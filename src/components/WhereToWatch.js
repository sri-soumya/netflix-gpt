import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WhereToWatch = () => {
  const streamingOptions = useSelector(
    (store) => store.movies.streamingOptions
  );
  if (!streamingOptions || streamingOptions.length === 0) return;
  return (
    <div className="px-12">
      <h1 className="text-3xl">Where To Watch In India</h1>
      <div className="flex mt-4 mb-8">
        {streamingOptions.map((option) => (
          <div className="border border-solid border-gray-600 ml-2 px-4 py-1">
            <Link target="_blank" to={option[2]} className="text-center">
              {option[0]}

              <span className="text-gray-400 text-sm italic text-center">
                {" - " + option[1]}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhereToWatch;
