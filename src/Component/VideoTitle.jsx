import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full md:aspect-video md:pt-[15%] py-[42%] px-12 md:pl-10 absolute text-gray-300 bg-gradient-to-r from-black ">
      <h1 className="md:text-6xl text-3xl font-bold md:my-6 ">{title}</h1>
      <p className="w-1/3 hidden sm:inline-block">{overview.slice(0, 200) + "...."}</p>
      <div className="mt-8 ">
        <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-opacity-90">
          <i className="fa-solid fa-play pr-2"></i> Play
        </button>
        <button className="bg-gray-500 text-white px-6 py-3 rounded-md mx-2 hover:bg-opacity-30">
          <i className="fa-solid fa-info pr-2 my-auto"></i>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
