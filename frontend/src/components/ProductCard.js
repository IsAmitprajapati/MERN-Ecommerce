import React, { useState } from "react";
import googleImage from "../assest/GoogleLogo.png";
import { MdOutlineStarHalf, MdOutlineStarPurple500 } from "react-icons/md";

const ProductCard = ({ image }) => {
  const [isMagnified, setIsMagnified] = useState(false);
  const [imageCursorPosition, setImageCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseEnter = () => {
    setIsMagnified(true);
  };
  const handleMouseLeave = () => {
    setIsMagnified(false);
  };
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setImageCursorPosition({ x, y });
    console.log(left, top, width, height);
  };
  return (
    <div className="md:flex w-full max-w-6xl md:h-auto gap-2 relative">
      <div className="md:w-1/2 min-h-[300px] min-w-[300px] max-h-96 max-w-sm bg-slate-100 rounded p-3 sticky">
        <img
          src={googleImage}
          className="h-full w-full cursor-crosshair"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        />
      </div>
      <div className="flex md:flex-col gap-2  md:justify-center items-center my-2 md:-order-1 max-h-96">
        <img
          src=""
          className="w-16 md:w-20 h-16 md:h-20 bg-slate-400 rounded"
        />
        <img
          src=""
          className="w-16 md:w-20 h-16 md:h-20 bg-slate-400 rounded"
        />
        <img
          src=""
          className="w-16 md:w-20 h-16 md:h-20 bg-slate-400 rounded"
        />
        <img
          src=""
          className="w-16 md:w-20 h-16 md:h-20 bg-slate-400 rounded"
        />
      </div>
      <div className="md:w-1/2 lg:ml-4 relative">
        {/* isMagnified display image  */}
        {isMagnified && (
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
        )}

        <div className="py-3">
          <p className="bg-red-100 inline-block px-3 rounded-full">
            Brand name
          </p>
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
            Rockerz 103 Pro
          </h2>
          <p className="text-base text-slate-400">WIRELESS EARBUDS</p>
          <div className="flex text-red-600">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarHalf />
          </div>

          <div className="flex gap-3 my-2 items-center">
            <p className="font-bold text-xl md:text-2xl lg:text-3xl text-red-600">
              <span>₹</span>200
            </p>
            <p className="text-lg text-slate-500 line-through">
              <span>₹</span>1000
            </p>
          </div>

          <div className="flex gap-3 my-3">
            <button className="w-full max-w-[130px] py-1 border-2 px-3 rounded border-red-600 hover:border-red-700 font-medium text-red-600 hover:text-red-700 text-medium">
              Buy
            </button>
            <button className="w-full max-w-[130px] py-1 border-2 px-3 rounded border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 text-white font-medium">
              Add To Cart
            </button>
          </div>

          <div>
            <p className="text-slate-700 font-semibold">Description : </p>
            <p>
              Let the noise of the world drown as you jam to your rhythm with
              Airdopes 141. Equipped with 8mm drivers, these dope wireless
              earbuds make your playlist sound better with crystal clear audio
              quality and powerful bass. Experience seamless calling and be
              clearly heard with ENx™ Technology.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
