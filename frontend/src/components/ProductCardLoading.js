import React from 'react'

const ProductCardLoading = () => {
  return (
    <div className="md:flex w-full max-w-6xl md:h-auto gap-2 relative animate-pulse">
      <div className="md:w-1/2 min-h-[300px] min-w-[300px] max-h-96 max-w-sm bg-slate-200 rounded p-3 sticky">
       
      </div>
      <div className="flex md:flex-col gap-2  md:justify-center items-center my-2 md:-order-1 max-h-96">
        <div
          className="w-16 md:w-20 h-16 md:h-20 bg-slate-200 rounded"
        ></div>
        <div
          className="w-16 md:w-20 h-16 md:h-20 bg-slate-200 rounded"
        ></div>
        <div
          className="w-16 md:w-20 h-16 md:h-20 bg-slate-200 rounded"
        ></div>
        <div
          className="w-16 md:w-20 h-16 md:h-20 bg-slate-200 rounded"
        ></div>
      </div>
      <div className="md:w-1/2 lg:ml-4 relative">
        {/* isMagnified display image  */}
        {/* {isMagnified && (
          <div className="min-h-[300px] w-full h-full min-w-[300px] bg-slate-100 rounded  absolute left-0 shadow-md overflow-hidden drop-shadow hidden lg:block transition-all max-h-96 max-w-sm">
            <div
              className="w-full h-full bg-slate-400 scale-110"
              style={{
                background: `url(${googleImage})`,
                backgroundPosition: `${imageCursorPosition.x * 100}% ${
                  imageCursorPosition.y * 100
                }%`,
              }}
            ></div>
          </div>
        )} */}

        <div className="py-3">
          <p className="bg-slate-200 inline-block px-3 rounded-full w-32 h-6">
            
          </p>
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl w-full bg-slate-200 rounded h-6 md:h-7 lg:h-9">
            {/* Rockerz 103 Pro */}
          </h2>
          <p className="text-base text-slate-400 w-32 h-6 bg-slate-200 my-2 rounded"></p>
          <div className="flex text-slate-600 gap-1">
          <div className='p-1 rounded-full bg-slate-200 w-5 h-5  '></div>
          <div className='p-1 rounded-full bg-slate-200 w-5 h-5 '></div>
          <div className='p-1 rounded-full bg-slate-200 w-5 h-5 '></div>
          <div className='p-1 rounded-full bg-slate-200 w-5 h-5 '></div>
          <div className='p-1 rounded-full bg-slate-200 w-5 h-5 '></div>
            
          </div>

          <div className="flex gap-3 my-2 items-center">
            <p className="font-bold text-xl md:text-2xl lg:text-3xl bg-slate-200 w-14 md:w-16 lg:w-20 h-5 md:h-6 lg:h-8 rounded">
              {/* <span>₹</span>200 */}
            </p>
            <p className="text-lg text-slate-500 line-through bg-slate-200 w-14 md:w-16 lg:w-20 h-5 md:h-6 lg:h-8 rounded">
         
            </p>
          </div>

          <div className="flex gap-3 my-3">
            <button className="w-full max-w-[130px] py-1  px-3 rounded  bg-slate-200 h-5 md:h-7 lg:h-9">
             
            </button>
            <button className="w-full max-w-[130px] py-1  px-3 rounded  bg-slate-200 h-5 md:h-7 lg:h-9">
           
            </button>
          </div>

          <div>
            <p className="text-slate-700 font-semibold bg-slate-200 h-3 md:h-5 lg:h-7 rounded"> </p>
            <p className='bg-slate-200 h-5 md:h-7 lg:h-20 my-2 rounded'>
              

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardLoading