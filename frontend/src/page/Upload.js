import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { GoCloudUpload } from "react-icons/go";
import { MdOutlineAddCircleOutline, MdOutlineDelete } from "react-icons/md";
import { categoryOption } from "../dataset/category";

const Upload = () => {
  const imageRef = useRef();
  const [data, setData] = useState({
    title: "",
    description: "",
    brand: "",
    image: [],
    price: "",
    sellPrice: "",
    category: "",
  });

  const handleUplaod = (e) => {
    e.stopPropagation();
    imageRef.current.click();
  };

  const handleUploadImage = useCallback(
    async (e) => {
      e.stopPropagation();
      const file = await e.target.files[0];

      const fromData = new FormData();
      fromData.append("image", file);
      if (file) {
        const uploadServer = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/upload/image`,
          {
            method: "POST",
            body: fromData,
          }
        );
        const dataRes = await uploadServer.json();
        console.log(fromData);
        console.log(dataRes);


        //save to useState
        setData((preve) => {
          return {
            ...preve,
            image: [
              ...preve.image,
              dataRes.fileName,
            ],
          };
        });
      }
    },
    [data]
  );

  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { title, image, price, sellPrice, category } = data;

    if (title && image[0] && price && sellPrice && category) {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/product/save`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const fetchData = await res.json();
      console.log(fetchData);

      //  reset all the data
      setData({
        title: "",
        description: "",
        brand: "",
        image: [],
        price: "",
        sellPrice: "",
        category: "",
      });

    }
    window.scrollTo({top : 0, behavior : "smooth"})
  };
  console.log(data);
  const handleDeleteImage = (e) => {
    e.stopPropagation();
    alert("Hii");
    //save to useState
    setData((preve) => {
      return {
        ...preve,
        image: [],
      };
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };



  useLayoutEffect(()=>{
    window.scrollTo({top : 0, behavior : "smooth"})
  },[])
  return (
    <div className="max-w-md w-full m-auto  p-3 ">
      <div className="p-4 bg-white shadow-md rounded">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">
            Title<span className="text-red-600">*</span> :{" "}
          </label>
          <input
            type={"text"}
            id="title"
            className="bg-slate-100 w-full py-1 px-2 rounded outline-none border"
            name="title"
            value={data.title}
            onChange={handleOnChange}
            required
          />

          <label htmlFor="title">Brand : </label>
          <input
            type={"text"}
            id="title"
            className="bg-slate-100 w-full py-1 px-2 rounded outline-none border"
            name="brand"
            value={data.brand}
            onChange={handleOnChange}
          />

          <label htmlFor="category">
            Category<span className="text-red-600">*</span> :
          </label>
          <select
            id="category"
            className="w-full bg-slate-100 p-1 border rounded outline-none"
            name="category"
            value={data.category}
            onChange={handleOnChange}
          >
            {/* <option className="p-5">select a category </option> */}
            {categoryOption.map((el) => {
              return (
                <option
                  className="p-5 rounded-none"
                  key={el.id}
                  value={el.value}
                >
                  {el.name}
                </option>
              );
            })}
          </select>

          {/* upload image section  */}
          <div
            className="border h-40 cursor-pointer bg-slate-100 my-2 flex justify-center items-center text-6xl text-slate-800 relative"
            onClick={handleUplaod} 
          >
            {data.image[0] ? (
              <>
                <img
                  src={process.env.REACT_APP_SERVER_DOMAIN_GET_IMAGE+data.image[data.image.length - 1]}
                  className="h-full"
                />
                <div
                  className="absolute bottom-0 right-0 text-2xl py-1 px-2 rounded-t-full rounded-l-full text-white bg-red-600 hover:bg-red-700"
                  onClick={handleDeleteImage}
                >
                  <MdOutlineDelete />
                </div>
                <div
                  className="absolute bottom-0 left-0 text-2xl py-1 px-2 rounded-t-full rounded-r-full text-white bg-red-600 hover:bg-red-700"
                  onClick={handleUplaod}
                >
                  <MdOutlineAddCircleOutline />
                </div>
              </>
            ) : (
              <GoCloudUpload />
            )}
          </div>
          <label htmlFor="imageProduct">
            <input
              type={"file"}
              id="imageProduct"
              className="hidden"
              accept="image/*"
              onChange={handleUploadImage}
              ref={imageRef}
              required
            />
          </label>

          {/* list of image upload  */}
          {data.image[0] && (
            <>
              <p className="text-xs">
                Minimum image one<span className="text-red-600">*</span> and
                Maximum image four<span className="text-red-600">*</span>
              </p>
              <div className="flex gap-2 my-3">
                {data.image.map((el,index) => {
                  return (
                    <div className="w-16 h-16 border object-fit hover:bg-slate-200 rounded" key={"image1"+index}>
                      <img src={process.env.REACT_APP_SERVER_DOMAIN_GET_IMAGE+el} className="w-full h-full" />
                    </div>
                  );
                })}
              </div>
            </>
          )}

          <div className="flex flex-col md:flex-row md:items-center md:gap-3">
            <label htmlFor="price " className="whitespace-nowrap">
              Price<span className="text-red-600">*</span> :{" "}
            </label>
            <input
              type={"number"}
              id="price"
              className="bg-slate-100 w-full py-1 px-2 outline-none border rounded"
              min={0}
              pattern="[0-9]*"
              required
              name="price"
              value={data.price}
              onChange={handleOnChange}
            />

            <label htmlFor="sellPrice" className="whitespace-nowrap">
              Sell Price<span className="text-red-600">*</span> :{" "}
            </label>
            <input
              type={"number"}
              id="sellPrice"
              className="bg-slate-100 w-full py-1 px-2 rounded outline-none border"
              min={0}
              pattern="[0-9]*"
              required
              name="sellPrice"
              value={data.sellPrice}
              onChange={handleOnChange}
            />
          </div>

          <label htmlFor="description">Description : </label>
          <textarea
            className="w-full bg-slate-100 resize-none rounded border outline-none px-2 py-1"
            rows={3}
            id="description"
            name="description"
            value={data.description}
            onChange={handleOnChange}
          ></textarea>

          <div className="flex justify-center mt-4">
            <button className="bg-red-600 hover:bg-red-700 px-5 py-1 font-semibold rounded text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
