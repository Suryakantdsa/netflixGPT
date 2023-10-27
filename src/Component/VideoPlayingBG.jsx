import React from "react";
import useGetMovieVideo from "../hooks/useGetMovieVideo";
import { useSelector } from "react-redux";

const VideoPlayingBG = ({ movieId }) => {
  useGetMovieVideo(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    
    <div className="w-full">
       <iframe className="w-full -mt-40 md:-mt-0 aspect-1/1 md:aspect-video"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
            title="YouTube video player"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
    </div>
  );
};

export default VideoPlayingBG;
