import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-10 text-white">
      <h1 className="sm:text-2xl text-xl py-6 font-semibold">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar " style={{ scrollbarWidth: "none" }}>
        <div className="flex ">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
