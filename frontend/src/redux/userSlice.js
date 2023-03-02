import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        userLogin : (state,action)=>{
            
        },
        userLogOut : (state,action)=>{

        },
        addItemCart : (state,action)=>{

        },
        deleteItemCart : (state,action)=>{

        },
        increaseQty : (state,action)=>{

        },
        decreaseQty : (state,action)=>{

        }
    }
})