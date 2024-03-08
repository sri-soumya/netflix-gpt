import React from "react";

const PopupTitle = ({ title }) => {
  return (
    <div className="pt-[35%] px-12 absolute text-white w-full aspect-video bg-gradient-to-r from-black">
      <h1 className="text-7xl font-bold">{title}</h1>
    </div>
  );
};

export default PopupTitle;
