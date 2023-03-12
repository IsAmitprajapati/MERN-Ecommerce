import React, { useRef, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import {BiDotsVerticalRounded} from "react-icons/bi"
import {RiUserFill} from "react-icons/ri"
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state)=>state.user)
console.log(user)
  //address content
  const [showAdd, setShowAdd] = useState(false);
  const [addressDetails, setAddressDetails] = useState({
    address: "",
    city: "",
    state: "",
    pincode: "",
    mobile: "",
  });
  const [listAddress, setListAddress] = useState([]);
  const [profileUpdateState, setProfileUpdateState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    image: "",
  });
  const [showProfileUpdate, setShowProfileUpdata] = useState(false);
  const changeImageRef = useRef()

  const handleOnChangeProfileUpdate = (e) => {
    const { name, value } = e.target;
    setProfileUpdateState((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUpdateProfileUpdate = ()=>{
    changeImageRef.current.click()
  }
  const handleonChangeProfileUpdate = async(e)=>{
    const file = e.target.files[0];

    const fromData = new FormData();
    fromData.append("image", file);
    console.log(process.env.REACT_APP_SERVER_DOMAIN);

    const uploadServer = await fetch(
      `${process.env.REACT_APP_SERVER_DOMAIN}/upload/image`,
      {
        method: "POST",
        body: fromData,
      }
    );
    const data = await uploadServer.json();
      console.log(data)
    //save to useState
    setProfileUpdateState((preve) => {
      return {
        ...preve,
        image: `${process.env.REACT_APP_SERVER_DOMAIN}/upload/image/${data.fileName}`,
      };
    });
  }


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    setShowAdd(false)
    setListAddress((preve) => {
      return [...preve, { ...addressDetails }];
    });
  };
  const handleUpdateProfile = (e)=>{
    e.preventDefault()
    console.log(profileUpdateState)
    setShowProfileUpdata(false)
  }
  return (
    <div className="p-2 md:p-4 md:gap-4">
      <div className="flex items-center flex-col">
        <div className="w-28 h-28 bg-slate-200 rounded-full drop-shadow overflow-hidden text-slate-800 flex justify-center items-center text-5xl lg:text-7xl">
          {user.data.image ? <img src={user.data.image} className="h-full w-full" /> : <RiUserFill/>}
        </div>
        <div className="text-base md:text-lg lg:text-xl font-medium my-1">
          {user.data.firstName} {user.data.lastName}
        </div>
        <div className="flex items-center gap-2 m-0">
          <span>
            <HiOutlineMail />
          </span>
          <div>{user.data.email}</div>
        </div>
        <button className="bg-slate-200 my-3 px-3 py-1 rounded hover:bg-slate-300" onClick={()=>setShowProfileUpdata(true)}>
          Edit Profile
        </button>
      </div>

      <div className="my-1">
        <p>Address : </p>
        <button
          className="bg-slate-200 hover:bg-slate-300 px-3 py-0.5 rounded"
          onClick={() => setShowAdd(true)}
        >
          Add
        </button>
        {/* list of address display here  */}
        <div className="">
          {/* add address content  */}
          {showAdd && (
            <div className="absolute w-full top-16 right-0 bottom-0 left-0 bg-slate-200 bg-opacity-60 flex justify-center py-5 px-2 overflow-scroll z-30">
              <form
                className="flex flex-col w-full max-w-sm bg-white shadow py-4 px-4 rounded h-fit"
                onSubmit={handleSaveAddress}
              >
                <span
                  className="ml-auto text-base cursor-pointer"
                  onClick={() => setShowAdd(false)}
                >
                  <MdOutlineCancel />
                </span>
                <label htmlFor="addressHome">Address </label>
                <textarea
                  rows={1}
                  className="bg-slate-200 resize-none outline-none border-none rounded p-1 min-h-[33px]"
                  required
                  value={addressDetails.address}
                  onChange={handleOnChange}
                  name="address"
                ></textarea>

                <label htmlFor="addresscity">City </label>
                <input
                  type={"text"}
                  className="bg-slate-100 mb-2 mt-1 py-1 px-2 rounded outline-none border-none"
                  required
                  value={addressDetails.city}
                  onChange={handleOnChange}
                  name="city"
                />

                <label htmlFor="addressState">State</label>
                <input
                  type={"text"}
                  className="bg-slate-100 mb-2 mt-1 py-1 px-2 rounded outline-none border-none"
                  required
                  value={addressDetails.state}
                  onChange={handleOnChange}
                  name="state"
                />

                <label htmlFor="addressPincode">Pincode</label>
                <input
                  type={"text"}
                  className="bg-slate-100 mb-2 mt-1 py-1 px-2 rounded outline-none border-none"
                  required
                  value={addressDetails.pincode}
                  onChange={handleOnChange}
                  name="pincode"
                />

                <label htmlFor="addressMobile">Mobile</label>
                <input
                  type={"number"}
                  className="bg-slate-100 mb-2 mt-1 py-1 px-2 rounded outline-none border-none"
                  required
                  value={addressDetails.mobile}
                  onChange={handleOnChange}
                  name="mobile"
                />

                <button className="bg-red-600 hover:bg-red-700 text-white p-1 select-none font-semibold mt-4 w-full max-w-[200px] m-auto rounded-full transition-all duration-600 hover:scale-105 drop-shadow">
                  Save
                </button>
              </form>
            </div>
          )}

          <div className="flex gap-2 my-3 flex-wrap">
            {listAddress.map((el) => {
              return (
                <>
                  <div className="w-full max-w-sm border p-2 text-sm relative ">
                  <div className="w-full absolute">
                    <div className="w-7 ml-auto text-lg cursor-pointer"><BiDotsVerticalRounded/></div>
                  </div>
                    <div className="flex">
                      <p className="min-w-[90px]">Flat No/Name </p>
                      <span className="px-2">:</span> {el.address}{" "}
                    </div>
                    <div className="flex">
                      <p className="min-w-[90px]">City </p>
                      <span className="px-2">:</span> {el.city}
                    </div>
                    <div className="flex">
                      <p className="min-w-[90px]">State </p>
                      <span className="px-2">:</span> {el.state}
                    </div>
                    <div className="flex">
                      <p className="min-w-[90px]">Pincode </p>
                      <span className="px-2">:</span> {el.pincode}
                    </div>
                    <div className="flex">
                      <p className="min-w-[90px]">Mobile </p>
                      <span className="px-2">:</span> {el.mobile}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* profile update option  */}
        {showProfileUpdate && (
          <div className="absolute w-full top-16 right-0 bottom-0 left-0 bg-slate-200 bg-opacity-60 flex justify-center py-5 px-2 overflow-scroll min-w-[290px] z-30">
            <form
              className="flex flex-col w-full max-w-sm bg-white shadow py-4 px-4 rounded h-fit "
              onSubmit={handleUpdateProfile}
            >
              <span
                className="ml-auto text-base cursor-pointer"
                onClick={()=>setShowProfileUpdata(false)}
              >
                <MdOutlineCancel />
              </span>

              <div className="flex justify-center items-center flex-col">
                <div className="w-28 h-28 bg-slate-200 rounded-full drop-shadow overflow-hidden ">
                  <img src={profileUpdateState.image} className="h-full w-full" />
                </div>
                <p className="my-2 py-1 px-3 bg-slate-200 rounded text-sm cursor-pointer hover:bg-slate-300" onClick={handleUpdateProfileUpdate}>Upload Profile</p>
                <input type={"file"}  className="hidden" ref={changeImageRef} onChange={handleonChangeProfileUpdate}/>
              </div>

              <label htmlFor="firstName">First Name </label>
              <input
                type={"text"}
                id="firstName"
                className="bg-slate-100 mb-2 mt-1 py-1 px-2 rounded outline-none border-none"
                name="firstName"
                value={profileUpdateState.firstName}
                onChange={handleOnChangeProfileUpdate}
                required
              />

              <label htmlFor="lastName">Last Name </label>
              <input
                type={"text"}
                id="lastName"
                className="bg-slate-100 mb-2 mt-1 py-1 px-2 rounded outline-none border-none"
                name="lastName"
                value={profileUpdateState.lastName}
                onChange={handleOnChangeProfileUpdate}
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
                value={profileUpdateState.email}
                onChange={handleOnChangeProfileUpdate}
                required
              />

              <button className="bg-red-600 hover:bg-red-700 text-white p-1 select-none font-semibold mt-4 w-full max-w-[200px] m-auto rounded-full transition-all duration-600 hover:scale-105 drop-shadow">
                Save
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
