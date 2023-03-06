import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProduct : []
}

export const getProducts = createAsyncThunk("product/getProductStatus",async()=>{
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`)
    const data = await response.json()
    return data
})

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
      
    },
    extraReducers : (builder)=>{
        builder.addCase(getProducts.fulfilled, (state,action)=>{
                console.log(action)
            state.allProduct = [...action.payload]
        })
    }
})



// export const {getProduct}  = productSlice.actions



export default productSlice.reducer


