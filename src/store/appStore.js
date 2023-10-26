import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./moviesSlice";
import gptSlice from "./gptSlice";

const appStore=configureStore({
    reducer:{
        user:userSlice,
        movies:movieSlice,
        gpt:gptSlice
    }
})

export default appStore;