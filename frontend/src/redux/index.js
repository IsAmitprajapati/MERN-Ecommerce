import {configureStore} from "@reduxjs/toolkit"
import loadingReducers from "./loadingSlice"
import productReducers from "./productSlice"
import userReducers from "./userSlice"

const store = configureStore({
    reducer : {
        loadingData : loadingReducers,
        products : productReducers,
        user : userReducers,
    }
})

export default store