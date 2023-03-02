import React, { useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import CardHorizontal from "../components/CardHorizontal";
import CardVertical from "../components/CardVertical";
import HorizontalCardSlide from "../components/HorizontalCardSlide";
import ProductCard from "../components/ProductCard";
import ProductCardLoading from "../components/ProductCardLoading";

const Product = () => {
  const params = useParams();
  console.log(params);

  const loadingDataSample = new Array(10).fill(null);
  const loadingNumber = new Array(15).fill(null);
  
  useLayoutEffect(()=>{
    window.scrollTo({top : 0, behavior : "smooth"})
  },[])
  return (
    <div className="p-2 md:p-4 gap-2 md:gap-4 flex flex-wrap ">
      {/* <ProductCard/> */}
      <ProductCardLoading />
      <h2 className="my-1 text-xl md:text-2xl relative font-semibold before:h-1 before:rounded-full before:bg-red-500 before:content before:absolute before:w-32 before:-bottom-1">
        Related Product
      </h2>

      <div className=" gap-2 md:gap-4 lg:gap-6 flex flex-wrap justify-center lg:justify-start min-h-[200px]">
        {loadingDataSample.map((el, index) => {
          return <CardVertical />;
        })}
      </div>

      <div className="overflow-scroll scrollbar-none">
        <HorizontalCardSlide>
          {loadingNumber.map((el, index) => {
            return <CardHorizontal key={index + "cartHorizontal"} />;
          })}
        </HorizontalCardSlide>
      </div>
      <div className="overflow-scroll scrollbar-none">
        <HorizontalCardSlide>
          {loadingNumber.map((el, index) => {
            return <CardHorizontal key={index + "cartHorizontal"} />;
          })}
        </HorizontalCardSlide>
      </div>
      <div className="overflow-scroll scrollbar-none">
        <HorizontalCardSlide>
          {loadingNumber.map((el, index) => {
            return <CardHorizontal key={index + "cartHorizontal"} />;
          })}
        </HorizontalCardSlide>
      </div>
      <div className="overflow-scroll scrollbar-none">
        <HorizontalCardSlide>
          {loadingNumber.map((el, index) => {
            return <CardHorizontal key={index + "cartHorizontal"} />;
          })}
        </HorizontalCardSlide>
      </div>
      <div className="overflow-scroll scrollbar-none">
        <HorizontalCardSlide>
          {loadingNumber.map((el, index) => {
            return <CardHorizontal key={index + "cartHorizontal"} />;
          })}
        </HorizontalCardSlide>
      </div>
      <div className="overflow-scroll scrollbar-none">
        <HorizontalCardSlide>
          {loadingNumber.map((el, index) => {
            return <CardHorizontal key={index + "cartHorizontal"} />;
          })}
        </HorizontalCardSlide>
      </div>
      <div className="overflow-scroll scrollbar-none">
        <HorizontalCardSlide>
          {loadingNumber.map((el, index) => {
            return <CardHorizontal key={index + "cartHorizontal"} />;
          })}
        </HorizontalCardSlide>
      </div>
    </div>
  );
};

export default Product;
