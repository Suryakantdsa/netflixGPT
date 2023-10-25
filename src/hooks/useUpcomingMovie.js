import { useDispatch } from 'react-redux'
import { addupComingMovie } from '../store/moviesSlice'
import { useEffect } from 'react'
import API_OPTIONS from '../utils/constant'


const useUpcomingMovie=()=>{

    //fetch the data from TMBD nowPlaying api
    const dispatch=useDispatch()
    const getUpcomingMovie=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
      const json=await data.json()
      dispatch(addupComingMovie(json.results))
      console.log(json.results)
    }
    useEffect(()=>{
        getUpcomingMovie()
    },[])
}


export default useUpcomingMovie