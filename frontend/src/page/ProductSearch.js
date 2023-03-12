import React, { useEffect, useState, useTransition } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import CardVertical from "../components/CardVertical";
import CardVerticalLoading from "../components/CardVerticalLoading";

const ProductSearch = () => {
  const location = useLocation();
  console.log(location.state);
  const [data, setData] = useState([]);
  const loadingDataSample = new Array(10).fill(null);
  const [loading, setLoading] = useState(true);

  console.log(location);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const interval = setTimeout(async () => {
      if (location.search) {
        setLoading(true);
        const res = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/product/search${location.search}`
        );
        const data = await res.json();
        setData(data);
        setLoading(false);
      }
    }, 2000);

    return () => clearTimeout(interval);
  }, [location.search]);

  return (
    <div className="p-2 md:p-4">
       <p className="text-slate-800 font-medium py-1">Search Results : (Showing 1 – {data?.data?.length} products )</p>
      <div className="gap-2 md:gap-4 flex flex-wrap justify-center">
        {!loading && location.search  && data?.data[0] ? (
           
            data.data.map((el, index) => {
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
          ) 
         : (
          loadingDataSample.map((el, index) => {
            return <CardVerticalLoading key={"ProductSearch" + index} />;
          })
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
