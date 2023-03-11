import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  HiOutlineBarsArrowDown,
  HiOutlineAdjustmentsHorizontal,
} from "react-icons/hi2";
import CardVerticalLoading from "../components/CardVerticalLoading";
import CardVertical from "../components/CardVertical";

const CategoryWise = () => {
  const params = useParams();
  const product = useSelector((state) => state.products.allProduct);
  const [categoryFilterWise, setCategoryFilterWise] = useState([]);
  const loadingNumber = new Array(15).fill(null);
  const [sortBy, setSortBy] = useState("");
  const [displaySortBy, setDisplaySortBy] = useState(false);
  console.log(product);

  console.log(params.category);

  const categoryWiseProduct = product.filter(
    (el) => el.category.toLowerCase() === params.category.toLowerCase(),
    []
  );

  useEffect(() => {
    setCategoryFilterWise(categoryWiseProduct);
  }, [categoryWiseProduct[0]]);

  const handleOnChangeSort = (e) => {
    const { value } = e.target;
    setSortBy(value);
    if (value.toLowerCase() === "HightoLow".toLowerCase()) {
      setCategoryFilterWise((preve) => preve.sort((a, b) => b.sellPrice - a.sellPrice));
    }
    if (value.toLowerCase() === "LowtoHigh".toLowerCase()) {
      setCategoryFilterWise((preve) =>preve.sort((a, b) => a.sellPrice - b.sellPrice));
    }
  };

  console.log(sortBy);
  return (
    <div>
      <div className="h-9 lg:hidden">
        <div className="flex fixed w-full bg-slate-50 z-30">
          <div
            className="flex-1 flex justify-center items-center gap-3 py-2 border border-slate-700 text-lg"
            onClick={() => setDisplaySortBy(true)}
          >
            <HiOutlineBarsArrowDown />
            <p className="text-base font-medium">Sort</p>
          </div>
          <div className="flex-1 flex justify-center items-center gap-3 py-2 border border-slate-700 text-lg">
            <HiOutlineAdjustmentsHorizontal />
            <p className="text-base font-medium">Filter</p>
          </div>
        </div>
      </div>

      {/* display pop bottom side  */}
      {displaySortBy && (
        <div className="fixed bottom-0 top-0 w-full h-full z-30 bg-slate-300 bg-opacity-30">
          <div className={`bg-white absolute bottom-0 w-full transition-all`}>
            <p className="uppercase text-slate-400 py-2 px-1 border ">
              Sort by
            </p>
            <div className="p-3">
              <div
                className="flex justify-between items-center"
               
              >
                <label className="py-2 text-sm" htmlFor="LowtoHigh">
                  Price -- Low to High
                </label>
                <input
                  type={"radio"}
                  id="LowtoHigh"
                  value={"LowtoHigh"}
                  className="w-5 h-4"
                  name="sortby"
                  checked={sortBy === "LowtoHigh"}
                  onChange={handleOnChangeSort}
                  onClick={() => setDisplaySortBy(false)}
                />
              </div>
              <div
                className="flex justify-between items-center"
               
              >
                <label className="py-2 text-sm" htmlFor="HightoLow">
                  Price -- High to Low
                </label>
                <input
                  type={"radio"}
                  id="HightoLow"
                  value={"HightoLow"}
                  className="w-5 h-4"
                  name="sortby"
                  checked={sortBy === "HightoLow"}
                  onChange={handleOnChangeSort}
                  onClick={() => setDisplaySortBy(false)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="p-2 md:p-4">
        <p className="text-slate-800 font-medium py-1">Search Results : </p>
        <div className="grid grid-cols-autoVerticalCard justify-items-center  gap-5">
          {categoryFilterWise[0]
            ? categoryFilterWise.map((el) => {
                return (
                  <CardVertical
                    key={el._id}
                    image={el.image[0]}
                    id={el._id}
                    title={el.title}
                    category={el.category}
                    price={el.price}
                    sellPrice={el.sellPrice}
                  />
                );
              })
            : loadingNumber.map((el, index) => {
                return <CardVerticalLoading key={index + "cartHorizontal"} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default CategoryWise;
