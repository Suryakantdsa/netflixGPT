import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../store/moviesSlice";
import { useEffect } from "react";

const useGetMovieVideo = (movieId) => {
  const dispatch = useDispatch();
  const MovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results)
    const videosArray = json.results;

    const filterVideo = videosArray?.filter(
      (video) => video?.type === "Trailer"
    );

    const movieTrailer = filterVideo.length ? filterVideo[0] : videosArray[0];
    // console.log(movieTrailer)
    dispatch(addTrailerVideo(movieTrailer));
  };

  useEffect(() => {
    MovieVideos();
  }, []);
};

export default useGetMovieVideo;
