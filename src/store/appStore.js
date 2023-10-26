import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
import appConfigSlice from "./appConfigSlice";

const appStore=configureStore({
    reducer:{
        user:userSlice,
        movies:movieSlice,
        gpt:gptSlice,
        appConfig:appConfigSlice
    }
})

export default appStore;