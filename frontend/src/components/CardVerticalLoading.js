import React from "react";

const CardVerticalLoading = () => {
  return (
    <div className="w-full min-w-[280px] max-w-[280px]  shadow rounded bg-white-300 animate-pulse cursor-pointer p-5 gap-3 flex flex-col my-1">
      <div className="min-w-[130px] min-h-[130px] w-full  bg-slate-200 h-full"></div>
      <div className="w-full flex flex-col gap-3 justify-center">
        <h2 className="bg-slate-200 p-2 w-full rounded"></h2>
        <h2 className="bg-slate-200 p-2 w-full rounded"></h2>
        <h2 className="bg-slate-200 p-2 w-full rounded"></h2>
        <h2 className="bg-slate-200 p-4 w-full rounded-full"></h2>
      </div>
    </div>
  );
};

export default CardVerticalLoading;
