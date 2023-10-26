import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        isGPTClicked:false
    }
    ,
    reducers:{
        toggleGPTpage:(state,action)=>{
            state.isGPTClicked=!state.isGPTClicked
        }
    }
})

export const {toggleGPTpage}=gptSlice.actions
export default gptSlice.reducer;