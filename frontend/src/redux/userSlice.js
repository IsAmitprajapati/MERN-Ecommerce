import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        data : {}
}
export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        userLogin : (state,action)=>{
            state.data = action.payload
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

export const {userLogin,userLogOut,addItemCart,deleteItemCart,increaseQty,decreaseQty} = userSlice.actions

export default userSlice.reducer