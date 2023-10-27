import { useDispatch, useSelector } from 'react-redux'
import { addTopratedMovie } from '../store/moviesSlice'
import { useEffect } from 'react'
import API_OPTIONS from '../utils/constant'


const useTopRatedMovie=()=>{
  const topRatedMovie=useSelector(store=>store.movies.topRatedMovie)

    //fetch the data from TMBD nowPlaying api
    const dispatch=useDispatch()
    const getTopRatedMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)

      const json=await data.json()
      dispatch(addTopratedMovie(json.results))
      console.log(json.results)
    }
    useEffect(()=>{
    //memoization techinic
        !topRatedMovie && getTopRatedMovies()
    },[])
}


export default useTopRatedMovie