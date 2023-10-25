import { useDispatch } from 'react-redux'
import { addPopularMovie } from '../store/moviesSlice'
import { useEffect } from 'react'
import API_OPTIONS from '../utils/constant'


const usePopularMovie=()=>{

    //fetch the data from TMBD nowPlaying api
    const dispatch=useDispatch()
    const getPopularMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
      const json=await data.json()
      dispatch(addPopularMovie(json.results))
    }
    useEffect(()=>{
      getPopularMovies()
    },[])
}


export default usePopularMovie