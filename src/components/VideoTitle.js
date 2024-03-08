import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-12 absolute text-white w-full aspect-video bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4"> {overview} </p>
      <div>
        <button className="bg-white text-black p-2 px-10 text-xl rounded-lg mr-6">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-2 px-10 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
