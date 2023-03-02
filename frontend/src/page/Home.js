import React, { useEffect, useRef, useState } from "react";
import Rounded from "../components/Rounded";
import ImageSlide from "../components/ImageSlide";
import HorizontalCardSlide from "../components/HorizontalCardSlide";
import CardHorizontal from "../components/CardHorizontal";
import CardVertical from "../components/CardVertical";

const Home = () => {
  const categoryLoading = new Array(12).fill(null);

  const loadingNumber = new Array(15).fill(null);
  useEffect(()=>{
    window.scrollTo({top : 0, behavior : "smooth"})
 },[])
  return (
    <div className="p-1">
      <div className="p-2 flex  justify-between gap-4 overflow-scroll scrollbar-none scroll-smooth duration-150">
        {categoryLoading.map((el, index) => {
          return <Rounded key={index} />;
        })}
      </div>
      <ImageSlide />
      <HorizontalCardSlide>
        {loadingNumber.map((el, index) => {
          return <CardHorizontal key={index + "cartHorizontal"} />;
        })}
      </HorizontalCardSlide>
      <HorizontalCardSlide>
        {loadingNumber.map((el, index) => {
          return <CardVertical key={index + "cartHorizontal"} />;
        })}
      </HorizontalCardSlide>
      <HorizontalCardSlide>
        {loadingNumber.map((el, index) => {
          return <CardVertical key={index + "cartHorizontal"} />;
        })}
      </HorizontalCardSlide>
      <HorizontalCardSlide>
        {loadingNumber.map((el, index) => {
          return <CardHorizontal key={index + "cartHorizontal"} />;
        })}
      </HorizontalCardSlide>
      <HorizontalCardSlide>
        {loadingNumber.map((el, index) => {
          return <CardHorizontal key={index + "cartHorizontal"} />;
        })}
      </HorizontalCardSlide>
      <HorizontalCardSlide>
        {loadingNumber.map((el, index) => {
          return <CardVertical key={index + "cartHorizontal"} />;
        })}
      </HorizontalCardSlide>
      <HorizontalCardSlide>
        {loadingNumber.map((el, index) => {
          return <CardHorizontal key={index + "cartHorizontal"} />;
        })}
      </HorizontalCardSlide>
      <HorizontalCardSlide>
        {loadingNumber.map((el, index) => {
          return <CardHorizontal key={index + "cartHorizontal"} />;
        })}
      </HorizontalCardSlide>
      <HorizontalCardSlide>
        {loadingNumber.map((el, index) => {
          return <CardHorizontal key={index + "cartHorizontal"} />;
        })}
      </HorizontalCardSlide>
      <HorizontalCardSlide>
        {loadingNumber.map((el, index) => {
          return <CardHorizontal key={index + "cartHorizontal"} />;
        })}
      </HorizontalCardSlide>
      <HorizontalCardSlide>
        {loadingNumber.map((el, index) => {
          return <CardHorizontal key={index + "cartHorizontal"} />;
        })}
      </HorizontalCardSlide>
      <HorizontalCardSlide>
        {loadingNumber.map((el, index) => {
          return <CardHorizontal key={index + "cartHorizontal"} />;
        })}
      </HorizontalCardSlide>
      <HorizontalCardSlide>
        {loadingNumber.map((el, index) => {
          return <CardHorizontal key={index + "cartHorizontal"} />;
        })}
      </HorizontalCardSlide>
      <HorizontalCardSlide>
        {loadingNumber.map((el, index) => {
          return <CardHorizontal key={index + "cartHorizontal"} />;
        })}
      </HorizontalCardSlide>

      <div className="my-5"></div>
    </div>
  );
};

export default Home;
