import React, { useCallback, useEffect, useLayoutEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useLinkClickHandler, useParams } from "react-router-dom";
import CardHorizontal from "../components/CardHorizontal";
import CardVertical from "../components/CardVertical";
import HorizontalCardSlide from "../components/HorizontalCardSlide";
import ProductCard from "../components/ProductCard";
import ProductCardLoading from "../components/ProductCardLoading";

const Product = () => {
  const params = useParams();
  const product = useSelector((state) => state.products.allProduct);
  console.log(params.id);

  const productById = product.filter(
    useCallback((el) => el._id === params.id, [params.id]),
    []
  );

  const categoryRelated = productById[0] && productById[0].category;
  const relatedProduct = product.filter(
    (el) => el.category === categoryRelated,
    []
  );
  console.log(productById);

  const loadingDataSample = new Array(10).fill(null);
  const loadingNumber = new Array(15).fill(null);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productById]);
  return (
    <div className="p-2 md:p-4 gap-2 md:gap-4 flex flex-wrap flex-col w-fit ">
      {productById[0] ? (
        <ProductCard product={productById[0]} />
      ) : (
        <ProductCardLoading />
      )}

      <h2 className="my-1 text-xl md:text-2xl relative font-semibold before:h-1 before:rounded-full before:bg-red-500 before:content before:absolute before:w-32 before:-bottom-1">
        Recommended  Product
      </h2>

      <div className=" gap-2 md:gap-4  flex flex-wrap justify-center lg:justify-start min-h-[200px]">
        {relatedProduct[0]
          ? relatedProduct.map((el) => {
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
              return <CardVertical key={index + "cartHorizontal"} />;
            })}
      </div>
    </div>
  );
};

export default Product;
