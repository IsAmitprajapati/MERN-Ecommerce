import React, { useEffect, useMemo, useState, useTransition } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
  const [isPending, startTransition] = useTransition();
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
      setCategoryFilterWise((preve) =>
        preve.sort((a, b) => b.sellPrice - a.sellPrice)
      );
    }
    if (value.toLowerCase() === "LowtoHigh".toLowerCase()) {
      setCategoryFilterWise((preve) =>
        preve.sort((a, b) => a.sellPrice - b.sellPrice)
      );
    }
  };

  console.log(sortBy);

  const maxPriceRange = useMemo(
    () => Math.max(...categoryWiseProduct.map((el) => el.sellPrice)),
    [categoryWiseProduct]
  );
  const minPriceRange = Math.min(
    ...categoryWiseProduct.map((el) => el.sellPrice)
  );
  const midPointRange = Math.ceil(maxPriceRange);
  const [priceRange, setPriceRange] = useState(minPriceRange);
  console.log(maxPriceRange);
  console.log(priceRange);

  const handlePriceRange = (e) => {
    const { value } = e.target;
    if (minPriceRange < value) {
      startTransition(() => setPriceRange(value));
    } else {
      setPriceRange(minPriceRange + 1);
    }

    setCategoryFilterWise((preve) => {
      return categoryWiseProduct.filter((el) => el.sellPrice < priceRange, []);
    });
  };

  const productAllCategoryList = [
    ...new Set([...product.map((el) => el.category)]),
  ].sort();

  //   const [paginationData,setPaginationData] = useState([])

  //   const handlePagination =  ()=>{

  //   }

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

      {/* display pop bottom side sort  */}
      {displaySortBy && (
        <div className="fixed bottom-0 top-0 w-full h-full z-30 bg-slate-300 bg-opacity-40 transition-opacity">
          <div className={`bg-white absolute bottom-0 w-full transition-all`}>
            <p className="uppercase text-slate-400 py-2 px-1 border ">
              Sort by
            </p>
            <div className="p-3">
              <div className="flex justify-between items-center">
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
              <div className="flex justify-between items-center">
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

      {/* display pop bottom side for filter section mobile */}
      {/* <div className="fixed bottom-0 top-0 w-full h-full z-30 bg-slate-300 bg-opacity-40 transition-opacity">
        <div
          className={`bg-white absolute bottom-0 w-full transition-all`}
        >

        </div>
      </div> */}
      <div className="grid md:grid-cols-categorySearch ">
        <div className="shadow-md relative hidden lg:block">
          <div className={` w-full transition-all`}>
            <p className="uppercase text-slate-400 py-2 px-1 border ">
              <span className="px-2 "> Sort by</span>
            </p>
            <div className="p-3">
              <div className="flex justify-between items-center">
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
              <div className="flex justify-between items-center">
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

          {/* price range display here  */}
          <div className="">
            <div className="uppercase text-slate-400 py-2 px-1 border">
              <p className="px-2">Price Range</p>
            </div>
            <div className="py-2 px-4">
              <input
                type={"range"}
                className="w-full"
                min={0}
                value={priceRange}
                max={maxPriceRange + 1}
                onChange={handlePriceRange}
              />
              <div className="text-xs flex justify-between">
                <div>0</div>
                <div className="font-medium text-slate-800 text-sm">
                  {priceRange}
                </div>
                <div>{maxPriceRange}</div>
              </div>
            </div>
          </div>

          {/* category wise display here  */}
          <div className="">
            <div className="uppercase text-slate-400 py-2 px-1 border">
              <p className="px-2">Category</p>
            </div>
            <div className=" ">
              {productAllCategoryList.map((el) => {
                return (
                  <Link to={"/category/" + el}>
                    <div className="flex gap-2 text-slate-800 py-2 px-3">
                      <input
                        type={"checkbox"}
                        checked={el === params.category}
                      />
                      <label>{el}</label>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* filter result display here  */}
        <div className="p-2 md:p-4">
          <p className="text-slate-800 font-medium py-1 whitespace-nowrap">
            Search Results :{" "}
            <span className="text-sm md:text-base ">
              (Showing 1 – {categoryFilterWise.length} products )
            </span>
          </p>
          
          <div className="grid grid-cols-autoVerticalCard  justify-items-center gap-5 ">
            {categoryFilterWise[0] && !isPending
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
                      description={el.description}
                      brand={el.brand}
                    />
                  );
                })
              : loadingNumber.map((el, index) => {
                  return <CardVerticalLoading key={index + "cartHorizontal"} />;
                })}
          </div>

          {/* pagination page  */}
          {/* <div className="flex gap-4 my-5 py-2 justify-center items-center border-t border-b">
            <div className="min-w-[25px] min-h-[25px] font-semibold text-white flex justify-center items-center rounded-full bg-red-600 cursor-pointer">1</div>
            <div className="">2</div>
            <div className="">3</div>
            <div className="">4</div>
            <div className="">5</div>
            <div className="">6</div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default CategoryWise;
