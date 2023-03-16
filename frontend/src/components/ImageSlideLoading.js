import React from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const ImageSlideLoading = () => {
  return (
    <div className="relative min-w-full animate-pulse">
      <div className="absolute  w-full h-full  hidden md:flex items-center z-30 ">
        <button className="mr-auto">
          <MdOutlineKeyboardArrowLeft className="drop-shadow-md text-black text-3xl bg-white rounded-full z-30 hover:text-white hover:bg-red-500" />
        </button>

        <button className="ml-auto">
          <MdOutlineKeyboardArrowRight className="drop-shadow-md text-black text-3xl bg-white rounded-full z-30 hover:text-white hover:bg-red-500" />
        </button>
      </div>
      <div className="px-2">
        <div className="flex py-3  overflow-hidden ">
          <div className="bg-slate-200 min-w-full h-52 md:h-72 rounded transition-all max-w-full overflow-hidden   duration"></div>
          <div className="bg-red-200 min-w-full h-52 md:h-72 rounded transition-all max-w-full overflow-hidden   "></div>
          <div className="bg-blue-200 min-w-full h-52 md:h-72 rounded transition-all max-w-full overflow-hidden   duration"></div>
          <div className="bg-orange-200 min-w-full h-52 md:h-72 rounded transition-all max-w-full overflow-hidden   duration"></div>
          <div className="bg-blue-200 min-w-full h-52 md:h-72 rounded transition-all max-w-full overflow-hidden   duration"></div>
        </div>
      </div>

      <div className="flex justify-center gap-2 z-40 relative">
        <p
          className={`p-1.5 rounded-full bg-slate-200 transition-all cursor-pointer `}
        ></p>
        <p
          className={`p-1.5 rounded-full bg-slate-200 transition-all cursor-pointer`}
        ></p>
        <p
          className={`p-1.5 rounded-full bg-slate-200 transition-all cursor-pointer `}
        ></p>
        <p
          className={`p-1.5 rounded-full bg-slate-200 transition-all cursor-pointer `}
        ></p>
        <p
          className={`p-1.5 rounded-full bg-slate-200 transition-all cursor-pointer`}
        ></p>
      </div>
    </div>
  );
};

export default ImageSlideLoading;
