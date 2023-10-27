import { useDispatch, useSelector } from 'react-redux'
import { addupComingMovie } from '../store/moviesSlice'
import { useEffect } from 'react'
import API_OPTIONS from '../utils/constant'


const useUpcomingMovie=()=>{
  const upComingMovie=useSelector(store=>store.movies.upComingMovie)

    //fetch the data from TMBD nowPlaying api
    const dispatch=useDispatch()
    const getUpcomingMovie=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
      const json=await data.json()
      dispatch(addupComingMovie(json.results))
      console.log(json.results)
    }
    useEffect(()=>{
    //memoization techinic
       !upComingMovie && getUpcomingMovie()
    },[])
}


export default useUpcomingMovie