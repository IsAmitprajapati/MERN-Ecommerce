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
      <ProductCard product={{
_id: "640216631c768e38422c8788",
description: "Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers and IWP Technology, 650mah C type Charging Case",
brand: "boAt",
image: [
"airpodes_1677858240031.webp",
"ad131FIAD131TypeC_1200x_1677858266874.webp",
"FeatureImagesAD131VA_1200x_1677858298599.webp",
"FeatureImagesAD131BV5_1677858376349.0_1200x_1677858376349.webp"
],
sellPrice: 1099,
category: "airdopes",
__v: 0,
title: "boAt Airdopes 131",
price: 2990
}}/>
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
