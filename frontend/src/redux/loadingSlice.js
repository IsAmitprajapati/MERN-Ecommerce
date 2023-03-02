import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading : false
}

export const Loading = createSlice({
    name : "Loading",
    initialState,
    reducers : {
       isLoading : (state,action)=>{
        console.log(action)
        state.isLoading = action.payload
       } 
    }
})

export const {isLoading} = Loading.actions

export default Loading.reducer