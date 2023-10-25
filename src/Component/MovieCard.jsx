import React from "react";
import { IMG_TMDB_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-6">
         <img
          src={IMG_TMDB_URL+posterPath}
          alt="MovieCards"
        />
    </div>
  );
};

export default MovieCard;
