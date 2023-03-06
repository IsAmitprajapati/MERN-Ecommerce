import {configureStore} from "@reduxjs/toolkit"
import loadingReducers from "./loadingSlice"
import productReducers from "./productSlice"

const store = configureStore({
    reducer : {
        loadingData : loadingReducers,
        products : productReducers,
    }
})

export default store