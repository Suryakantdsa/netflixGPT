import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../store/moviesSlice'
import { useEffect } from 'react'
import API_OPTIONS from '../utils/constant'


const useNowPlayingMovie=()=>{
  const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)

    //fetch the data from TMBD nowPlaying api
    const dispatch=useDispatch()
    const getNowPlayingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
      const json=await data.json()
      dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
    //memoization techinic
     !nowPlayingMovies && getNowPlayingMovies()
    },[])
}


export default useNowPlayingMovie