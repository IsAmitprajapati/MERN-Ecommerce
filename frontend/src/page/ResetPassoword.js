import React, { useEffect, useState } from "react";
import signinImage from "../assest/signin.gif";
import GoogleImage from "../assest/GoogleLogo.png";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import Countdown from "../components/Countdown";

const ResetPassoword = () => {
    const navigate = useNavigate();
    const [newShowPass,setNewShowPass] = useState(false)
    const [confirmShowPass,setconfirmShowPass] = useState(false)
    const {id} = useParams()
    console.log(id)
    const [data, setData] = useState({
        _id : id,
        newPassword: "",
        confirmPassword: ""
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
        const { newPassword, confirmPassword } = data;

        if (newPassword, confirmPassword) {
            if (newPassword === confirmPassword) {
                const fetchData = await fetch(
                    `${process.env.REACT_APP_SERVER_DOMAIN}/user/reset-password`,
                    {
                        method: "PUT",
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
                    navigate("/")
                }
            }
        } else {
            alert("Please enter new password");
        }
    };

    return (
        <div className="min-h-[calc(100vh-120px)] p-2 md:p-4 gap-3 flex flex-col justify-center ">
            <div className="mx-auto w-full max-w-sm shadow-md p-5   bg-white rounded">
                {(
                    <>

                        <form className="flex flex-col my-4" onSubmit={handleOnSubmit}>
                            <label htmlFor="email" className="select-none">
                                New Password
                            </label>
                            <div className="bg-slate-100 mb-2 mt-1 py-1 px-2 rounded flex items-center">
                                <input
                                    type={newShowPass ? "text" : "password"}
                                    id="newPassword"
                                    className="bg-slate-100 w-full outline-none border-none text-base"
                                    name="newPassword"
                                    value={data.newPassword}
                                    onChange={handleOnChange}
                                    required
                                />
                                <span
                                    className="text-lg cursor-pointer"
                                    onClick={()=>setNewShowPass(preve => !preve)}
                                >
                                    {newShowPass ? <BiShow /> : <BiHide />}
                                </span>
                            </div>

                            <label htmlFor="email" className="select-none">
                                Confirm Password
                            </label>
                            <div className="bg-slate-100 mb-2 mt-1 py-1 px-2 rounded flex items-center">
                                <input
                                    type={confirmShowPass ? "text" : "password"}
                                    id="confirmPassword"
                                    className="bg-slate-100 w-full outline-none border-none text-base"
                                    name="confirmPassword"
                                    value={data.confirmPassword}
                                    onChange={handleOnChange}
                                    required
                                />
                                <span
                                    className="text-lg cursor-pointer"
                                    onClick={()=>setconfirmShowPass(preve => !preve)}
                                >
                                    {confirmShowPass ? <BiShow /> : <BiHide />}
                                </span>
                            </div>

                            <button className="bg-red-600 hover:bg-red-700 text-white p-1 select-none font-semibold mt-4 w-full max-w-[200px] m-auto rounded-full transition-all duration-600 hover:scale-105 drop-shadow">
                                Submit
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
}

export default ResetPassoword