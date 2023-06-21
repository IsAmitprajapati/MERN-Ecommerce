import React from 'react'
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decreaseQty, deleteItemCart, increaseQty } from '../redux/userSlice';
import sampleImage from '../assest/sampleImage.jpg'

const CartCard = ({image, id , title ,category,price,sellPrice,description,brand,qty,total}) => {
  const dispatch = useDispatch()

  const SellPriceIndia = sellPrice && sellPrice.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "INR",
  });

  const totalPriceIndia = total && total.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "INR",
  });

  return (
    <div className="flex gap-2 md:gap-4 border border-slate-300 ">
            <div className="h-24 w-24 min-w-[100px] min-h-[100px] sm:min-w-[112px] sm:min-h-[112px] md:min-h-[140px] md:min-w-[140px]  lg:min-h-[144px] lg:min-w-[144px] bg-slate-200 rounded p-1 flex justify-center items-center">
             {image && <img src={(process.env.REACT_APP_SERVER_DOMAIN_GET_IMAGE+image) || sampleImage} className="h-full object-scale-down mix-blend-multiply" />}
            </div>
            <div className="flex flex-col py-1  md:py-2 w-full pr-3 ">
              <div className="flex justify-between w-full">
                <p className="bg-red-100 max-w-[89px] md:max-w-[100px] px-1 md:px-2 lg:px-3 rounded-full text-xs md:text-sm">
                 { brand}
                </p>
                <div className="text-slate-700 hover:text-white hover:bg-red-600 md:p-1 rounded-full cursor-pointer" onClick={()=>dispatch(deleteItemCart({_id : id}))}>
                  <MdOutlineDelete />
                </div>
              </div>
              <h2 className="font-semibold text-lg md:text-xl lg:text-2xl title w-full max-w-md ">
                {title}
              </h2>
              <p className="font-bold text-xs  md:text-base lg:text-lg  text-red-600  my-1">
                {/* <span>₹</span> */}
                {SellPriceIndia}
              </p>
              <div className="md:my-1 flex">
                <div className="flex ">
                  <button className="bg-slate-200 w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-lg rounded" onClick={()=>dispatch(increaseQty({_id : id}))}>
                    <HiPlusSm />
                  </button>
                  <p className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-lg font-medium ">
                    {qty}
                  </p>
                  <button className="bg-slate-200 w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-lg rounded" onClick={()=>dispatch(decreaseQty({_id : id}))}>
                    <HiMinusSm />
                  </button>
                </div>
                <div className="flex ml-auto text-slate-700">
                  <p className="">Total</p>
                  <span className="px-1">:</span>
                  <p className="font-medium">
                  {/* <span>₹</span> */}
                  {totalPriceIndia}</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default CartCard