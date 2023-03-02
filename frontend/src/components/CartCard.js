import React from 'react'
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { MdOutlineDelete } from "react-icons/md";

const CartCard = () => {
  return (
    <div className="flex gap-2 md:gap-4 border border-slate-300 ">
            <div className="h-24 w-24 min-w-[100px] min-h-[100px] sm:min-w-[112px] sm:min-h-[112px] md:min-h-[140px] md:min-w-[140px]  lg:min-h-[144px] lg:min-w-[144px] bg-slate-200 rounded p-1">
              <img src="" className="h-full" />
            </div>
            <div className="flex flex-col py-1  md:py-2 w-full pr-3 ">
              <div className="flex justify-between w-full">
                <p className="bg-red-100 max-w-[89px] md:max-w-[100px] px-1 md:px-2 lg:px-3 rounded-full text-xs md:text-sm">
                  Brand name
                </p>
                <div className="text-slate-700 hover:text-white hover:bg-red-600 md:p-1 rounded-full cursor-pointer">
                  <MdOutlineDelete />
                </div>
              </div>
              <h2 className="font-semibold text-lg md:text-xl lg:text-2xl title w-full max-w-md ">
                Rockerz 103 ksdjgl kjdslgksjd kljsdlg slkj dslkgjs lkjsdgl sdlk
              </h2>
              <p className="font-bold text-xs  md:text-base lg:text-lg  text-red-600  my-1">
                <span>₹</span>200
              </p>
              <div className="md:my-1 flex">
                <div className="flex ">
                  <button className="bg-slate-200 w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-lg rounded">
                    <HiPlusSm />
                  </button>
                  <p className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-lg font-medium ">
                    1
                  </p>
                  <button className="bg-slate-200 w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-lg rounded">
                    <HiMinusSm />
                  </button>
                </div>
                <div className="flex ml-auto text-slate-700">
                  <p className="">Total</p>
                  <span className="px-1">:</span>
                  <p className="font-medium"><span>₹</span>200</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default CartCard