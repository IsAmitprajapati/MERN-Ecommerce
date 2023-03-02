import {configureStore} from "@reduxjs/toolkit"
import loadingReducers from "./loadingSlice"

const store = configureStore({
    reducer : {
        loadingData : loadingReducers
    }
})

export default store