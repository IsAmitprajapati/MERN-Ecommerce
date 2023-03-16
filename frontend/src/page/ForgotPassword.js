import React, { useEffect, useState } from "react";
import signinImage from "../assest/signin.gif";
import GoogleImage from "../assest/GoogleLogo.png";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Countdown from "../components/Countdown";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [sendEmailNotDone, setSendEmailNotDone] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [data, setData] = useState({
    email: "",
  });

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
    console.log(process.env.REACT_APP_SERVER_DOMAIN);
    const { email } = data;

    if (email) {
      console.log("email");
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/user/forgotpassword`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responseData = await fetchData.json();
      console.log(responseData);
      if (responseData.success) {
        alert("Email send");
        setSendEmailNotDone(false);
      }
    } else {
      alert("Enter Your email");
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] p-2 md:p-4 gap-3 flex flex-col justify-center ">
      <div className="mx-auto w-full max-w-sm shadow-md p-5   bg-white rounded">
        {sendEmailNotDone ? (
          <>
            <div className="flex justify-center items-center ">
              <div className="w-20 h-20 rounded-full bg-slate-100 overflow-hidden">
                <img src={signinImage} alt="sign in" />
              </div>
            </div>
            <form className="flex flex-col my-4" onSubmit={handleOnSubmit}>
              <label htmlFor="email" className="select-none">
                Enter your Email
              </label>
              <input
                type={"email"}
                id="email"
                className="bg-slate-100 mb-2 mt-2 py-1 px-2 rounded outline-none border-none"
                name="email"
                value={data.email}
                onChange={handleOnChange}
                required
              />

              <button className="bg-red-600 hover:bg-red-700 text-white p-1 select-none font-semibold mt-4 w-full max-w-[200px] m-auto rounded-full transition-all duration-600 hover:scale-105 drop-shadow">
                Forgot Password
              </button>
            </form>
            <p className="text-sm mt-4 select-none">
              Already have account ?{" "}
              <span className="pl-1  text-red-600 underline hover:text-red-700">
                <Link to={"/signin"}>Sign In</Link>
              </span>
            </p>
          </>
        ) : (
          <>
             <Countdown email={data.email} againCall={handleOnSubmit}/>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
