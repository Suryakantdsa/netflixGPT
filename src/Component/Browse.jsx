import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import GPTpage from "./GPTpage";
import { useSelector } from "react-redux";


const Browse = () => {
  const isGptSearchClicked = useSelector((store) => store.gpt.isGPTClicked);
  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow">
      {isGptSearchClicked ? (
        <GPTpage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
    
  </div>
);
};

export default Browse;
