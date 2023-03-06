import React from "react";

const Rounded = ({image,category}) => {
  return (
    <div className="flex justify-center items-center flex-col min-w-[64px] min-h-[64px] lg:max-w-[96px] ">
      <div className="min-w-[64px] min-h-[64px] md:min-w-[80px] md:min-h-[80px] lg:min-w-[96px] lg:min-h-[96px] max-w-[64px] max-h-[64px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[96px] lg:max-h-[96px] bg-slate-200  shadow rounded-full cursor-pointer touch-auto p-3 flex justify-center items-center">
        <img src={process.env.REACT_APP_SERVER_DOMAIN_GET_IMAGE+image} className="h-[60px] object-scale-down mix-blend-multiply hover:scale-105 transition-all"/>
      </div>
      <p className="rounded-full mt-2 text-center text-xs  capitalize items-baseline">{category}</p>
    </div>
  );
};

export default Rounded;
