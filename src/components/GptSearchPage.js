import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchResults from "./GptSearchResults";
import { FidgetSpinner } from "react-loader-spinner";
import { useSelector } from "react-redux";

const GptSearchPage = () => {
  const showGptLoader = useSelector((store) => store.gpt.showGptLoader);
  return (
    <div className="">
      <img
        className="scale-y-125 fixed -z-10"
        alt="bg-img"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      />

      <GptSearchBar />
      <div className="ml-[50%] pt-6">
        {showGptLoader && (
          <FidgetSpinner
            className="z-30 w-14"
            visible={true}
            height="80"
            width="80"
            ariaLabel="fidget-spinner-loading"
            wrapperStyle={{}}
            wrapperClass="fidget-spinner-wrapper"
          />
        )}
      </div>
      <GptSearchResults />
    </div>
  );
};

export default GptSearchPage;
