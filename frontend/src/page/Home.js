import React, { useEffect, useRef, useState } from "react";
import Rounded from "../components/Rounded";
import ImageSlide from "../components/ImageSlide";
import HorizontalCardSlide from "../components/HorizontalCardSlide";
import CardHorizontal from "../components/CardHorizontal";
import CardVertical from "../components/CardVertical";
import { useSelector } from "react-redux";
import CardHorizontalLoading from "../components/CardHorizontalLoading";
import CardVerticalLoading from "../components/CardVerticalLoading";
import RoundedLoading from "../components/RoundedLoading";
import ImageSlideLoading from "../components/ImageSlideLoading";

const Home = () => {
  const categoryLoading = new Array(13).fill(null);
  const product = useSelector((state) => state.products.allProduct);
  // console.log(product);

  const loadingNumber = new Array(15).fill(null);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const airdopes = product.filter(
    (el) => el.category.toLowerCase() === "airdopes",
    []
  );

  const watches = product.filter(
    (el) => el.category.toLowerCase() === "watches",
    []
  );

  const earphonrs = product.filter(
    (el) => el.category.toLowerCase() === "bluetooth earphonrs",
    []
  );

  const mobiles = product.filter(
    (el) => el.category.toLowerCase() === "mobiles",
    []
  );

  const mouses = product.filter(
    (el) => el.category.toLowerCase() === "mouse",
    []
  );

  const televisions = product.filter(
    (el) => el.category.toLowerCase() === "televisions",
    []
  );
  const wired_earphones = product.filter(
    (el) => el.category.toLowerCase() === "wired earphones",
    []
  );

  const Cameras_Photography = product.filter(
    (el) => el.category.toLowerCase() === "cameras & photography",
    []
  );
  const bluetooth_speakers = product.filter(
    (el) => el.category.toLowerCase() === "bluetooth speakers",
    []
  );

  const refrigerator = product.filter(
    (el) => el.category.toLowerCase() === "refrigerator",
    []
  );

  const trimmers = product.filter(
    (el) => el.category.toLowerCase() === "trimmers",
    []
  );

  //category list display logic
  const productAllCategoryList = [
    ...new Set([...product.map((el) => el.category)]),
  ].sort();
    console.log(productAllCategoryList)
  let productAllCategoryOneProduct = [];
    for (let i = 0; i < productAllCategoryList.length; i++) {
      productAllCategoryOneProduct.push(
        product.filter(
          (el) => el.category.toLowerCase() === productAllCategoryList[i].toLowerCase()
        )[0]
      );
    }
 
  // console.log(productAllCategoryOneProduct);
  return (
    <div className="p-1">
      <div className="p-2 flex flex-row items-baseline    gap-4 overflow-scroll scrollbar-none scroll-smooth duration-150">
        {productAllCategoryOneProduct[0] ? (
          productAllCategoryOneProduct.map((el, index) => {
            return <Rounded key={index} image={el.image[0]} category={el.category} />;
          })
        ) : (
          categoryLoading.map((el, index) => {
            return <RoundedLoading key={index} />;
          })
        )}
      </div>
      {product[0] ? <ImageSlide /> : <ImageSlideLoading/> }
      
      <HorizontalCardSlide heading="Top's Airdopes" category="airdopes">
        {airdopes[0]
          ? airdopes.map((el) => {
              return (
                <CardHorizontal
                  key={el._id}
                  image={el.image[0]}
                  id={el._id}
                  title={el.title}
                  category={el.category}
                  price={el.price}
                  sellPrice={el.sellPrice}
                  description={el.description}
                  brand={el.brand}
                />
              );
            })
          : loadingNumber.map((el, index) => {
              return <CardHorizontalLoading key={index + "cartHorizontal"} />;
            })}
      </HorizontalCardSlide>
      <HorizontalCardSlide heading={"Popular's Watches"} category="watches">
        {watches[0]
          ? watches.map((el) => {
              return (
                <CardHorizontal
                  key={el._id}
                  image={el.image[0]}
                  id={el._id}
                  title={el.title}
                  category={el.category}
                  price={el.price}
                  sellPrice={el.sellPrice}
                  description={el.description}
                  brand={el.brand}
                />
              );
            })
          : loadingNumber.map((el, index) => {
              return <CardHorizontalLoading key={index + "cartHorizontal"} />;
            })}
      </HorizontalCardSlide>
      <HorizontalCardSlide heading={"Bluetooth Earphoners"} category="bluetooth earphonrs">
        {earphonrs[0]
          ? earphonrs.map((el) => {
              return (
                <CardVertical
                  key={el._id}
                  image={el.image[0]}
                  id={el._id}
                  title={el.title}
                  category={el.category}
                  price={el.price}
                  sellPrice={el.sellPrice}
                  description={el.description}
                  brand={el.brand}
                />
              );
            })
          : loadingNumber.map((el, index) => {
              return <CardVerticalLoading key={index + "cartHorizontal"} />;
            })}
      </HorizontalCardSlide>
      <HorizontalCardSlide heading={"Mobiles"} category="mobiles">
        {mobiles[0]
          ? mobiles.map((el) => {
              return (
                <CardVertical
                  key={el._id}
                  image={el.image[0]}
                  id={el._id}
                  title={el.title}
                  category={el.category}
                  price={el.price}
                  sellPrice={el.sellPrice}
                  description={el.description}
                  brand={el.brand}
                />
              );
            })
          : loadingNumber.map((el, index) => {
              return <CardVerticalLoading key={index + "cartHorizontal"} />;
            })}
      </HorizontalCardSlide>
      <HorizontalCardSlide heading={"Mouses"} category="mouse">
        {mouses[0]
          ? mouses.map((el) => {
              return (
                <CardVertical
                  key={el._id}
                  image={el.image[0]}
                  id={el._id}
                  title={el.title}
                  category={el.category}
                  price={el.price}
                  sellPrice={el.sellPrice}
                  description={el.description}
                  brand={el.brand}
                />
              );
            })
          : loadingNumber.map((el, index) => {
              return <CardHorizontalLoading key={index + "cartHorizontal"} />;
            })}
      </HorizontalCardSlide>
      <HorizontalCardSlide heading={"Televisions"} category="televisions">
        {televisions[0]
          ? televisions.map((el) => {
              return (
                <CardVertical
                  key={el._id}
                  image={el.image[0]}
                  id={el._id}
                  title={el.title}
                  category={el.category}
                  price={el.price}
                  sellPrice={el.sellPrice}
                  description={el.description}
                  brand={el.brand}
                />
              );
            })
          : loadingNumber.map((el, index) => {
              return <CardHorizontalLoading key={index + "cartHorizontal"} />;
            })}
      </HorizontalCardSlide>
      <HorizontalCardSlide heading={"Cameras & Photography"} category="cameras & photography">
        {Cameras_Photography[0]
          ? Cameras_Photography.map((el) => {
              return (
                <CardVertical
                  key={el._id}
                  image={el.image[0]}
                  id={el._id}
                  title={el.title}
                  category={el.category}
                  price={el.price}
                  sellPrice={el.sellPrice}
                  description={el.description}
                  brand={el.brand}
                />
              );
            })
          : loadingNumber.map((el, index) => {
              return <CardHorizontalLoading key={index + "cartHorizontal"} />;
            })}
      </HorizontalCardSlide>
      <HorizontalCardSlide heading={"Wired Earphones"} category="wired earphones">
        {wired_earphones[0]
          ? wired_earphones.map((el) => {
              return (
                <CardHorizontal
                  key={el._id}
                  image={el.image[0]}
                  id={el._id}
                  title={el.title}
                  category={el.category}
                  price={el.price}
                  sellPrice={el.sellPrice}
                  description={el.description}
                  brand={el.brand}
                />
              );
            })
          : loadingNumber.map((el, index) => {
              return <CardHorizontalLoading key={index + "cartHorizontal"} />;
            })}
      </HorizontalCardSlide>
      <HorizontalCardSlide heading={"Bluetooth Speakers"} category="bluetooth speakers">
        {bluetooth_speakers[0]
          ? bluetooth_speakers.map((el) => {
              return (
                <CardHorizontal
                  key={el._id}
                  image={el.image[0]}
                  id={el._id}
                  title={el.title}
                  category={el.category}
                  price={el.price}
                  sellPrice={el.sellPrice}
                  description={el.description}
                  brand={el.brand}
                />
              );
            })
          : loadingNumber.map((el, index) => {
              return <CardHorizontalLoading key={index + "cartHorizontal"} />;
            })}
      </HorizontalCardSlide>
      <HorizontalCardSlide heading={"Refrigerator"} category="refrigerator">
        {refrigerator[0]
          ? refrigerator.map((el) => {
              return (
                <CardVertical
                  key={el._id}
                  image={el.image[0]}
                  id={el._id}
                  title={el.title}
                  category={el.category}
                  price={el.price}
                  sellPrice={el.sellPrice}
                  description={el.description}
                  brand={el.brand}
                />
              );
            })
          : loadingNumber.map((el, index) => {
              return <CardHorizontalLoading key={index + "cartHorizontal"} />;
            })}
      </HorizontalCardSlide>

      <HorizontalCardSlide heading={"Trimmers"} category="trimmers">
        {trimmers[0]
          ? trimmers.map((el) => {
              return (
                <CardVertical
                  key={el._id}
                  image={el.image[0]}
                  id={el._id}
                  title={el.title}
                  category={el.category}
                  price={el.price}
                  sellPrice={el.sellPrice}
                  description={el.description}
                  brand={el.brand}
                />
              );
            })
          : loadingNumber.map((el, index) => {
              return <CardHorizontalLoading key={index + "cartHorizontal"} />;
            })}
      </HorizontalCardSlide>
    
      

      <div className="my-5"></div>
    </div>
  );
};

export default Home;
