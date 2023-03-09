import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import signinImage from "../assest/signin.gif";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { isLoading } from "../redux/loadingSlice";
import ImageToBase64 from "../utility/ImageToBase64";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  const handleShowPassword = () => {
    setShowPass((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowPassConfirm((preve) => !preve);
  };

  const handleUploadProfileImage = async (e) => {
    const file = e.target.files[0];

    // const fromData = new FormData();
    // fromData.append("image", file);
    // console.log(process.env.REACT_APP_SERVER_DOMAIN);

    // const uploadServer = await fetch(
    //   `${process.env.REACT_APP_SERVER_DOMAIN}/upload/image`,
    //   {
    //     method: "POST",
    //     body: fromData,
    //   }
    // );
    // const data = await uploadServer.json();
    //   console.log(data)
    //save to useState

    const data = await ImageToBase64(file)
    setData((preve) => {
      return {
        ...preve,
        image: data,
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

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    
    const { firstName, lastName, email, password, confirmPassword, image } = data;
    // console.log(data)
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        await dispatch(isLoading(true))
        const fetchdata = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/user/signup`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const res = await fetchdata.json();
        // console.log(res);
        
        await dispatch(isLoading(false))
        if(res.alert === "error"){
          alert(res.message)
        }else{
          alert(res.message)
          setTimeout(()=>{
            navigate("/signin");
          },1000)
        }
    }else{
      alert("required filed")
    }
  };
}

  return (
    <div className="min-h-[calc(100vh-120px)] p-2 md:p-4 gap-3 flex flex-col justify-center relative">
      <div className="mx-auto w-full max-w-sm shadow-md p-5   bg-white rounded">
        <div className="flex justify-center items-center ">
          <div className="w-20 h-20 rounded-full bg-slate-100 relative overflow-hidden drop-shadow-md shadow-md">
            <img src={data.image ? data.image : signinImage} alt="sign in" />

            <label htmlFor="profileImage">
              <div className="text-center absolute bottom-0 w-full h-1/2 bg-slate-600 bg-opacity-80 cursor-pointer">
                <p className="text-sm drop-shadow py-1 text-slate-100">
                  Upload
                </p>
              </div>
              <input
                type={"file"}
                id="profileImage"
                className="hidden"
                accept="image/*"
                onChange={handleUploadProfileImage}
              />
            </label>
          </div>
        </div>
        <form className="flex flex-col" onSubmit={handleOnSubmit}>
          <label htmlFor="firstName">First Name </label>
          <input
            type={"text"}
            id="firstName"
            className="bg-slate-100 mb-2 mt-1 py-1 px-2 rounded outline-none border-none"
            name="firstName"
            value={data.firstName}
            onChange={handleOnChange}
            required
          />

          <label htmlFor="lastName">Last Name </label>
          <input
            type={"text"}
            id="lastName"
            className="bg-slate-100 mb-2 mt-1 py-1 px-2 rounded outline-none border-none"
            name="lastName"
            value={data.lastName}
            onChange={handleOnChange}
            required
          />

          <label htmlFor="email" className="select-none">
            Email
          </label>
          <input
            type={"email"}
            id="email"
            className="bg-slate-100 mb-2 mt-1 py-1 px-2 rounded outline-none border-none"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            required
          />
          <label htmlFor="Signuppassword" className="select-none">
            Password
          </label>
          <div className="bg-slate-100 mb-2 mt-1 py-1 px-2 rounded flex items-center">
            <input
              type={showPass ? "text" : "password"}
              id="Signuppassword"
              className="bg-slate-100 w-full outline-none border-none text-base"
              name="password"
              value={data.password}
              onChange={handleOnChange}
              required
            />
            <span
              className="text-lg cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPass ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <label htmlFor="cconfirmpassword" className="select-none">
            Confirm Password
          </label>
          <div className="bg-slate-100 mb-2 mt-1 py-1 px-2 rounded flex items-center">
            <input
              type={showPassConfirm ? "text" : "password"}
              id="cconfirmpassword"
              className="bg-slate-100 w-full outline-none border-none text-base"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleOnChange}
              required
            />
            <span
              className="text-lg cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showPassConfirm ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white p-1 select-none font-semibold mt-4 w-full max-w-[200px] m-auto rounded-full transition-all duration-600 hover:scale-105 drop-shadow">
            Sign up
          </button>
        </form>
        
        <p className="text-sm mt-4 select-none">
          Already have account ?{" "}
          <span className="pl-1  text-red-600 underline hover:text-red-700">
            <Link to={"/signin"}>Sign In</Link>
          </span>
        </p>
      </div>

      {/* successfull  */}
      <div className="">
        <div className="w-full max-w-md rounded-md overflow-hidden"></div>
      </div>
    </div>
  );
};

export default SignUp
