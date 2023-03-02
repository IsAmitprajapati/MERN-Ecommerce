import React from "react";
import { Oval } from "react-loader-spinner";

export default function Loading() {
  return (
    <>
      {/* desktop version */}
      <div className="flex drop-shadow-2xl fixed z-50 top-0 right-0 left-0 bottom-0 bg-slate-200  justify-center items-center bg-opacity-50">
        <span className="hidden md:block">
          <Oval
            height={120}
            width={120}
            color="#ff0000"
            wrapperStyle={{}}
            wrapperClass="drop-shadow-2xl "
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#fff"
            strokeWidth={4}
            strokeWidthSecondary={4}
          />
        </span>

        {/* mobile version */}
        <span className="md:hidden">
          <Oval
            height={90}
            width={90}
            color="#ff0000"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#f1f5f9"
            strokeWidth={4}
            strokeWidthSecondary={4}
          />
        </span>
      </div>
    </>
  );
}
