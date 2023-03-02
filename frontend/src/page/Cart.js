import React, { useEffect, useLayoutEffect } from "react";
import { BsCart4 } from "react-icons/bs";
import emptyCartImage from "../assest/emtpy.gif";
import CartCard from "../components/CartCard";

const Cart = () => {

  useLayoutEffect(()=>{
    window.scrollTo({top : 0, behavior : "smooth"})
  },[])

  return (
    <div className="h-full min-h-[calc(100vh-120px)] p-1">
      <div className="my-1 text-xl md:text-2xl relative font-semibold before:h-1 before:rounded-full before:bg-red-500 before:content before:absolute before:w-32 before:-bottom-1">
        Your Shopping Cart
      </div>
      {/* <div className="min-h-[calc(100vh-200px)] flex flex-col justify-center items-center ">
        <div className="text-5xl md:text-7xl lg:text-9xl mt-10 text-slate-400">
          <BsCart4 />
        </div>
        <div className="mt-6 text-center font-medium  text-base md:text-lg lg:text-2xl py-1 px-10  bg-slate-200 rounded-md hover:bg-slate-300 transition-all cursor-pointer">Empty Cart</div>        
      </div> */}

      <div className="lg:flex w-full justify-between mt-5">
        <div className="flex-1 max-w-3xl rounded  ">
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
        <div className="flex-1 md:max-w-3xl lg:max-w-md my-2 lg:fixed lg:right-3 w-full">
          <h3 className="bg-blue-500 text-white px-2 font-semibold rounded py-2">
            Summary
          </h3>
          <div className="flex px-3 justify-between font-medium my-2">
            <p>Total Qty</p>
            <p>
              9583 <span className="px-0.1">PC</span>
            </p>
          </div>
          <div className="flex px-3 justify-between font-medium my-2">
            <p>Total Price</p>
            <p>
              <span className="pr-0.5">₹</span>9583
            </p>
          </div>
          <div className="hidden lg:flex flex-1 md:max-w-3xl lg:max-w-md h-10 w-full bg-red-600  justify-center items-center my-1 rounded cursor-pointer">
            <p className="font-bold text-base md:text-lg  text-white  md:my-1">
              Pay <span>₹</span>200
            </p>
          </div>

          <div className="my-3 ">
            <div className="my-2 text-sm">
              <button className="text-slate-600 underline ">Change</button>
            </div>
            <div className="w-full max-w-full border-2 border-slate-500 p-2 text-sm">
              <div className="flex">
                <p className="min-w-[90px]">Flat No/Name </p>
                <span className="px-2">:</span> A-11 shree kanhaiya chawl shiv
                shakti dham valai pada road santosh bhuvan nallasopara
              </div>
              <div className="flex">
                <p className="min-w-[90px]">City </p>
                <span className="px-2">:</span> mumbai
              </div>
              <div className="flex">
                <p className="min-w-[90px]">State </p>
                <span className="px-2">:</span> Maharashtra
              </div>
              <div className="flex">
                <p className="min-w-[90px]">Pincode </p>
                <span className="px-2">:</span> 401209
              </div>
              <div className="flex">
                <p className="min-w-[90px]">Mobile </p>
                <span className="px-2">:</span> 9307961978
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex-1 md:max-w-3xl lg:max-w-md h-10 sticky z-10 bottom-0 left-0 right-0 w-full bg-red-600 flex justify-center items-center my-1 rounded cursor-pointer">
          <p className="font-bold text-base md:text-lg  text-white  md:my-1">
            Pay <span>₹</span>200
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
