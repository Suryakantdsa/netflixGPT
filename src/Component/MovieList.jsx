import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-10 text-white">
      <h1 className="text-3xl py-6 font-semibold">{title}</h1>
      <div className="flex overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        <div className="flex space-x-4">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
