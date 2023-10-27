import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../store/moviesSlice";
import { useEffect } from "react";
import API_OPTIONS from "../utils/constant";

const useGetMovieVideo = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const dispatch = useDispatch();
  const MovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const videosArray = json.results;

    const filterVideo = videosArray?.filter(
      (video) => video?.type === "Trailer"
    );

    const movieTrailer = filterVideo.length ? filterVideo[0] : videosArray[0];
    dispatch(addTrailerVideo(movieTrailer));
  };

  useEffect(() => {
    //memoization techinic
    !trailerVideo && MovieVideos();
  }, []);
};

export default useGetMovieVideo;
