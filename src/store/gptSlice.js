import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        isGPTClicked:false,
        movieResults: null,
        movieNames: null,

    }
    ,
    reducers:{
        toggleGPTpage:(state,action)=>{
            state.isGPTClicked=!state.isGPTClicked
        },
        addGPTmoviesResult:(state,action)=>{
            const {name,movieArr}=action.payload
            state.movieNames=name;
            state.movieResults=movieArr
        }
    }
})

export const {toggleGPTpage,addGPTmoviesResult}=gptSlice.actions
export default gptSlice.reducer;