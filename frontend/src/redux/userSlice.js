import { createSlice } from "@reduxjs/toolkit";

const tokenLocalStorage = localStorage.getItem("token")

const initialState = {
  token : localStorage.getItem("token"),
  data: {
    cartItem: [],
    email: "",
    firstName: "",
    image: "",
    lastName: "",
    _id: "",
  },
  cartItem : []
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken : (state,action)=>{
      state.token = action.payload
    },
    userLogin: (state, action) => {
      state.data = action.payload;
    },
    userLogOut: (state, action) => {
      state.data = {};
      state.token = ""
      localStorage.clear()
    },
    addItemCart: (state, action) => {
      console.log(action.payload);
      const findIndexItem = state.cartItem.findIndex(el => el._id === action.payload._id)
      console.log(findIndexItem)
      const total = action.payload.sellPrice
      if(findIndexItem === -1){
        state.cartItem = [...state.cartItem,{...action.payload , qty : 1, total : total }]
        console.log("cart Item added")
      }else{
        console.log("already available")
      }
    },
    deleteItemCart: (state, action) => {
        const findIndexItem = state.cartItem.findIndex(el => el._id === action.payload._id)
        state.cartItem.splice(findIndexItem,1)
    },
    increaseQty: (state, action) => {
        const findIndexItem = state.cartItem.findIndex(el => el._id === action.payload._id)
        const qty = state.cartItem[findIndexItem].qty  + 1
        const total =  qty * state.cartItem[findIndexItem].sellPrice
        
        state.cartItem[findIndexItem].qty = qty
        state.cartItem[findIndexItem].total = total

    },
    decreaseQty: (state, action) => {
        const findIndexItem = state.cartItem.findIndex(el => el._id === action.payload._id)
        let qty = state.cartItem[findIndexItem].qty 
        if(qty > 1){
            qty = state.cartItem[findIndexItem].qty - 1
        }
        const total =  qty * state.cartItem[findIndexItem].sellPrice
        
        state.cartItem[findIndexItem].qty = qty
        state.cartItem[findIndexItem].total = total
    },
  },
});

export const {
  userLogin,
  setToken,
  userLogOut,
  addItemCart,
  deleteItemCart,
  increaseQty,
  decreaseQty,
} = userSlice.actions;

export default userSlice.reducer;
