import React, { useEffect, useRef, useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const ImageSlide = ({
  image1,
  image2,
  image3,
  image4,
  image5,
  imageCount = 5,
}) => {
  const slideImageRef = useRef();
  const [translateImage, setTranslateImage] = useState(0);
  const [count, setCount] = useState(0);

  const nextImage = () => {
    if (count < 4) {
      setCount((preve) => preve + 1);
    }
  };

  const preveImage = () => {
    if (count > 0) {
      setCount((preve) => preve - 1);
    }
  };

  const handleAutomaticSlide = () => {
    if (count < 4) {
      nextImage();
    }
  };

  useEffect(() => {
    const interval = setInterval(handleAutomaticSlide, 5000);
    return ()=>{
      clearInterval(interval)
    }
  }, []);
  console.log("hii")
  useEffect(() => {
    const slideCalculatedValue = count * 100;
    setTranslateImage(slideCalculatedValue);
    if(count > 4){
      setCount(0)
    }
  }, [count]);

  const directScroll = (number) => {
    setCount(number);
  };
  return (
    <div className="relative min-w-full ">
      <div className="absolute  w-full h-full  hidden md:flex items-center z-30 ">
        <button className="mr-auto">
          <MdOutlineKeyboardArrowLeft
            className="drop-shadow-md text-black text-3xl bg-white rounded-full z-30 hover:text-white hover:bg-red-500"
            onClick={preveImage}
          />
        </button>

        <button className="ml-auto">
          <MdOutlineKeyboardArrowRight
            className="drop-shadow-md text-black text-3xl bg-white rounded-full z-30 hover:text-white hover:bg-red-500"
            onClick={nextImage}
          />
        </button>
      </div>
      <div className="px-2">
        <div className="flex py-3  overflow-hidden ">
          <div
            className="bg-slate-200 min-w-full h-52 md:h-72 rounded transition-all max-w-full overflow-hidden  animate-pulse duration"
            ref={slideImageRef}
            style={{ transform: `translateX(${-translateImage}%)` }}
          >
            <img src={image1} className="h-full w-full border-none" />
          </div>
          <div
            className="bg-red-200 min-w-full h-52 md:h-72 rounded transition-all max-w-full overflow-hidden  animate-pulse "
            ref={slideImageRef}
            style={{ transform: `translateX(${-translateImage}%)` }}
          >
            <img src={image2} className="h-full w-full border-none" />
          </div>
          <div
            className="bg-blue-200 min-w-full h-52 md:h-72 rounded transition-all max-w-full overflow-hidden  animate-pulse duration"
            ref={slideImageRef}
            style={{ transform: `translateX(${-translateImage}%)` }}
          >
            <img src={image3} className="h-full w-full border-none" />
          </div>
          <div
            className="bg-orange-200 min-w-full h-52 md:h-72 rounded transition-all max-w-full overflow-hidden  animate-pulse duration"
            ref={slideImageRef}
            style={{ transform: `translateX(${-translateImage}%)` }}
          >
            <img src={image5} className="h-full w-full border-none" />
          </div>
          <div
            className="bg-blue-200 min-w-full h-52 md:h-72 rounded transition-all max-w-full overflow-hidden  animate-pulse duration"
            ref={slideImageRef}
            style={{ transform: `translateX(${-translateImage}%)` }}
          >
            <img src={image5} className="h-full w-full border-none" />
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 z-40 relative">
        <p
          className={`p-1.5 rounded-full bg-slate-200 transition-all cursor-pointer ${
            count === 0 && "bg-slate-400"
          }`}
          onClick={() => directScroll(0)}
        ></p>
        <p
          className={`p-1.5 rounded-full bg-slate-200 transition-all cursor-pointer ${
            count === 1 && "bg-slate-400"
          }`}
          onClick={() => directScroll(1)}
        ></p>
        <p
          className={`p-1.5 rounded-full bg-slate-200 transition-all cursor-pointer ${
            count === 2 && "bg-slate-400"
          }`}
          onClick={() => directScroll(2)}
        ></p>
        <p
          className={`p-1.5 rounded-full bg-slate-200 transition-all cursor-pointer ${
            count === 3 && "bg-slate-400"
          }`}
          onClick={() => directScroll(3)}
        ></p>
        <p
          className={`p-1.5 rounded-full bg-slate-200 transition-all cursor-pointer ${
            count === 4 && "bg-slate-400"
          }`}
          onClick={() => directScroll(4)}
        ></p>
      </div>
    </div>
  );
};

export default ImageSlide;
