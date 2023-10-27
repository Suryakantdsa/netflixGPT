import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import Footer from './Footer'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)

  return (
    <>
    
    <div className='bg-black '>
      <div className='lg:-mt-80 md:-mt-10 sm:pt-0 pt-0 relative z-10'>

      <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Upcoming Movie"} movies={movies?.upComingMovie}/>
      <MovieList title={"Popular Movie"} movies={movies?.popularMovie}/>
      <MovieList title={"Top Rated Movie⭐"} movies={movies?.topRatedMovie}/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default SecondaryContainer