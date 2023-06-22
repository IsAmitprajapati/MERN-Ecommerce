import React, { useEffect, useState } from "react";
import signinImage from "../assest/signin.gif";
import GoogleImage from "../assest/GoogleLogo.png";
import { BiShow, BiHide } from "react-icons/bi";
import { Link,useNavigate, useParams } from "react-router-dom";
import { isLoading } from "../redux/loadingSlice";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/userSlice";


const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [showPass, setShowPass] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPass((preve) => !preve);
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
    console.log(data);
    dispatch(isLoading(true))
    const fetchData = await fetch(
      `${process.env.REACT_APP_SERVER_DOMAIN}/user/signin`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await fetchData.json();
    dispatch(isLoading(false))
    if (res.alert == "success") {
      localStorage.setItem('token', res.token)
      dispatch(setToken(res.token))
        
      setTimeout(() => {
        navigate("/");
      }, 1000)

    } else {
      alert(res.message)
    }
  };
  
  return (
    <div className="min-h-[calc(100vh-120px)] p-2 md:p-4 gap-3 flex flex-col justify-center ">
      <div className="mx-auto w-full max-w-sm shadow-md p-5   bg-white rounded">
        <div className="flex justify-center items-center ">
          <div className="w-20 h-20 rounded-full bg-slate-100 overflow-hidden">
            <img src={signinImage} alt="sign in" />
          </div>
        </div>
        <form className="flex flex-col " onSubmit={handleOnSubmit}>
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
          <label htmlFor="password" className="select-none">
            Password
          </label>
          <div className="bg-slate-100 mb-2 mt-1 py-1 px-2 rounded flex items-center">
            <input
              type={showPass ? "text" : "password"}
              id="password"
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

          <p className="text-sm ml-auto mb-2 select-none hover:underline cursor-pointer">
            <Link to={"/forgotpassword"}>Forgot Password ?</Link>
          </p>

          <button className="bg-red-600 hover:bg-red-700 text-white p-1 select-none font-semibold mt-4 w-full max-w-[200px] m-auto rounded-full transition-all duration-600 hover:scale-105 drop-shadow">
            Login
          </button>
        </form>
        <p className="text-sm mt-4">
          Does't have account ?{" "}
          <span className="pl-1  text-red-600 underline hover:text-red-700">
            <Link to={"/signup"}>Sign up</Link>
          </span>
        </p>
      </div>

      {/* <div className="mx-auto  w-full max-w-sm shadow-md px-5 py-2  bg-white rounded flex items-center cursor-pointer select-none">
        <img src={GoogleImage} alt="google" className="w-8 h-8" />
        <div className="text-center w-full font-semibold">
          <p>Sign in with Google</p>
        </div>
      </div> */}
    </div>
  );
};

export default SignIn;
