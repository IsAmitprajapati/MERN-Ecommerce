import React from 'react'

const RoundedLoading = () => {
  return (
    <div className="animate-pulse">
      <div className="min-w-[64px] min-h-[64px] md:min-w-[80px] md:min-h-[80px] lg:min-w-[96px] lg:min-h-[96px] bg-slate-200  shadow rounded-full cursor-pointer touch-auto"></div>
      <p className="bg-slate-200 p-2 rounded-full mt-2"></p>
    </div>
  )
}

export default RoundedLoading