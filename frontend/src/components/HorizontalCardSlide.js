import React, { Children, useRef, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";
import CardHorizontal from "./CardHorizontal";
import CardVertical from "./CardVertical";

const HorizontalCardSlide = ({ children, heading,category }) => {
  const [scrollL, setScrollL] = useState(0);
  const cardSlideImage = useRef();

  const preveImage = () => {
    cardSlideImage.current.scrollLeft -= 300;
    setScrollL(cardSlideImage);
  };
  const nextImage = () => {
    cardSlideImage.current.scrollLeft += 300;
    setScrollL(cardSlideImage);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between gap-2 md:gap-4">
        <h2 className="text-2xl font-medium capitalize my-4 px-2">{heading}</h2>
        <Link
          to={`/category/${category}`}
          className="text-black hover:text-red-600 font-medium hover:underline"
          onClick={()=>window.screenTop({ top: 0, behavior: "smooth" })}
        >
          View All
        </Link>
      </div>
      <div className="relative ">
        <div className="absolute  w-full h-full  hidden md:flex  items-center  ">
          {scrollL !== 0 && (
            <button className="mr-auto">
              <MdOutlineKeyboardArrowLeft
                className="drop-shadow-md text-black text-3xl  bg-white rounded-full z-40 relative hover:text-white hover:bg-red-500"
                onClick={preveImage}
              />
            </button>
          )}

          <button className="ml-auto">
            <MdOutlineKeyboardArrowRight
              className="drop-shadow-md text-black text-3xl bg-white rounded-full z-40 relative hover:text-white hover:bg-red-500"
              onClick={nextImage}
            />
          </button>
        </div>
        <div className="px-2 overflow-hidden">
          <div
            ref={cardSlideImage}
            className="flex gap-2 md:gap-5 overflow-scroll scrollbar-none scroll-smooth  relative z-30 "
          >
            {/* render all card here  */}
            {children}
            {/* <CardVertical/>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCardSlide;
