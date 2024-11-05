import React from "react";
import VideoTitle from "./VideoTitle";
import VideoPlayingBG from "./VideoPlayingBG";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[Math.floor(Math.random() * movies.length)];
  const { overview, original_title, id } = mainMovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoPlayingBG movieId={id} />
    </div>
  );
};

export default MainContainer;
