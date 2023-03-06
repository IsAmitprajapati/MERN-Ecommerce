import React from 'react'

const CardHorizontalLoading = () => {
  return (
    <div className="w-full min-w-[280px] h-36 shadow rounded bg-white-300 animate-pulse cursor-pointer py-2 px-3 gap-3 flex my-1">
    <div className="min-w-[120px] min-h-[120px] h-32 w-32  bg-slate-200 rounded"></div>
    <div className="w-full flex flex-col gap-3 justify-center">
      <h2 className="bg-slate-200 p-2 w-full rounded"></h2>
      <h2 className="bg-slate-200 p-2 w-full rounded"></h2>
      <h2 className="bg-slate-200 p-2 w-full rounded"></h2>
      <h2 className="bg-slate-200 p-3 w-full rounded-full "></h2>
    </div>
  </div>
  )
}

export default CardHorizontalLoading