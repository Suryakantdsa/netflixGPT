import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name:"movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovie:null,
    topRatedMovie:null,
    upComingMovie:null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTopratedMovie: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    addupComingMovie: (state, action) => {
      state.upComingMovie = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo,addupComingMovie ,addPopularMovie ,addTopratedMovie} = moviesSlice.actions;

export default moviesSlice.reducer;