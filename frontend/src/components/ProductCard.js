import React, { useState } from "react";
import googleImage from "../assest/GoogleLogo.png";
import { MdOutlineStarHalf, MdOutlineStarPurple500 } from "react-icons/md";

const ProductCard = ({ product }) => {
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
  console.log(product);

  const [productImage, setProductImage] = useState(
    process.env.REACT_APP_SERVER_DOMAIN_GET_IMAGE + product.image[0]
  );

  const handleMouseEnterProduct = (imgName) => {
    setProductImage(process.env.REACT_APP_SERVER_DOMAIN_GET_IMAGE + imgName);
  };
  return (
    <div className="md:flex w-full max-w-6xl md:h-auto gap-2 relative">
      <div className="md:w-1/2 min-h-[300px] min-w-[300px] max-h-96 max-w-sm bg-slate-100 rounded p-3 sticky">
        <img
          src={productImage}
          className="h-full w-full cursor-crosshair"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          loading="lazy"
        />
      </div>
      <div className="flex md:flex-col gap-2  md:justify-center items-center my-2 md:-order-1 max-h-96">
        {product.image.map((el) => {
          return (
            <img
              key={el}
              src={process.env.REACT_APP_SERVER_DOMAIN_GET_IMAGE + el}
              className="w-16 md:w-20 h-16 md:h-20 bg-slate-200 rounded cursor-pointer"
              onMouseEnter={() => handleMouseEnterProduct(el)}
              onClick={() => handleMouseEnterProduct(el)}
              loading="lazy"
            />
          );
        })}
      </div>
      <div className="md:w-1/2 lg:ml-4 relative">
        {/* isMagnified display image  */}
        {isMagnified && (
          <div className="min-h-[300px] w-full h-full min-w-[300px] bg-slate-100 rounded  absolute left-0 shadow-md overflow-hidden drop-shadow hidden lg:block transition-all max-h-96 max-w-sm">
            <div
              className="w-full h-full bg-slate-400 scale-110"
              style={{
                background: `url(${productImage})`,
                backgroundPosition: `${imageCursorPosition.x * 100}% ${
                  imageCursorPosition.y * 100
                }%`,
              }}
            ></div>
          </div>
        )}

        <div className="py-3">
          <p className="bg-red-100 inline-block px-3 rounded-full">
            {product.brand}
          </p>
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
            {product.title}
          </h2>
          <p className="text-base text-slate-400 uppercase">{product.category}</p>
          <div className="flex text-red-600">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarHalf />
          </div>

          <div className="flex gap-3 my-2 items-center">
            <p className="font-bold text-xl md:text-2xl lg:text-3xl text-red-600">
              <span>₹</span>
              {product.sellPrice}
            </p>
            <p className="text-lg text-slate-500 line-through">
              <span>₹</span>
              {product.price}
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
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;