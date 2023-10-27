import React from "react";
import { IMG_TMDB_URL, NO_POSTER } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  const url=posterPath?IMG_TMDB_URL+posterPath:NO_POSTER
  return (
    <div className="w-48 pr-6 ">
         <img
         className="rounded-md"
          src={url}
          alt="MovieCards"
        />
    </div>
  );
};

export default MovieCard;
