import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)

  return (
    <div className='bg-black '>
      <div className='-mt-80 relative z-10'>

      <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Upcoming Movie"} movies={movies?.upComingMovie}/>
      <MovieList title={"Popular Movie"} movies={movies?.popularMovie}/>
      <MovieList title={"Top Rated Movie⭐"} movies={movies?.topRatedMovie}/>
      </div>
    </div>
  )
}

export default SecondaryContainer