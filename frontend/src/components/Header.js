import React, { useEffect, useState, useTransition } from "react";
import Logo from "./Logo";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../redux/userSlice";
import { handleSearchProductLoading } from "../redux/productSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch  = useDispatch()
  const location = useLocation()
  const user = useSelector((state) => state.user);
  const [search,setSearch] = useState("")

  console.log(user.cartItem.length)

  useEffect(()=>{
    setSearch(location.search.slice(3))
  },[])


  const handleSearch = (e)=>{
    const {value} = e.target
      setSearch(value)
    if(value){
      navigate(`/search?q=${value}`.toLowerCase());
    }
    else{
      navigate(`/search`);
    }
  }
  return (
    <header className="h-16 shadow flex items-center justify-between px-2 md:px-4 fixed w-full bg-white z-50 ">
      <div className="flex justify-start">
        <Link to={"/"} className="cursor-pointer">
          <span className="hidden sm:block">
            <Logo w={110} h={38} />
          </span>
          <span className="sm:hidden">
            <Logo w={80} h={38} />
          </span>
        </Link>
      </div>

      <div className="hidden sm:flex h-full max-h-9 border pl-4 w-full max-w-sm rounded-full focus-within:shadow  focus-within:shadow-slate-400/40 overflow-hidden">
        <input
          type="text"
          placeholder="Search product here..."
          className="min-w-max w-full border-none outline-none placeholder:text-sm"
          onChange={handleSearch}
          value={search}         
        />
        <div className="h-full p-2 px-4  rounded-r-full  cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold">
          <BsSearch />
        </div>
      </div>

      <div className="flex text-2xl md:text-2xl gap-5  items-center text-slate-700">
        <NavLink
          to={"cart"}
          className={({ isActive }) =>
            `${isActive ? "rounded-full text-slate-800 " : ""}`
          }
        >
          <div className="relative cursor-pointer hover:text-slate-800">
            <FaShoppingCart />
            <p className="absolute text-xs m-0 text-center -top-1 -right-1 px-1 py-0 rounded-full bg-red-600 hover:bg-red-700 text-white ">
              {user.cartItem.length}
              
            </p>
          </div>
        </NavLink>
        <div className="relative group">
          <NavLink
            to={"profile"}
            className={({ isActive }) =>
              ` ${isActive ? "rounded-full text-slate-800" : ""}`
            }
          >
            <div className="cursor-pointer hover:text-slate-800 text-2xl md:text-3xl drop-shadow h-8 w-8 overflow-hidden rounded-full flex justify-center items-center">
              {user.data.image ? (
                <img src={user.data.image} loading="lazy" className="w-full h-full drop-shadow-2xl" />
              ) : (
                <CgProfile />
              )}
            </div>
          </NavLink>
          {/* menu product upload  */}
          {user.data._id && (
            <>
              <div className="text-base  absolute whitespace-nowrap p-2 rounded hidden group-hover:flex flex-col -translate-x-1/3 bg-white drop-shadow-md transition-all duration-200">
                <div className="absolute -top-2 translate-x-1/3 w-full -shadow">
                  <div className="bg-red-500 w-0 h-0 border-b-8 border-l-8 border-r-8 border-t-0 bg-transparent border-transparent border-b-white"></div>
                </div>
                <Link
                  to={"profile"}
                  className="hover:bg-slate-200 rounded px-2 py-1 text-center font-medium"
                >
                  {user.data.firstName} {user.data.lastName}
                </Link>
                {(user.data.email === process.env.REACT_APP_SUPER_ADMIN_EMAIL) && (
                  <>
                    <Link
                      to={"upload"}
                      className="hover:bg-slate-200 rounded px-2 py-1"
                    >
                      New product
                    </Link>
                  </>
                )}
              </div>
            </>
          )}
        </div>

        <NavLink to={"signin"} className="flex items-center">
        {
          user.data._id ? <button className="text-sm md:text-base h-full font-medium text-white bg-red-600 hover:bg-red-700 px-2 md:px-5 py-1 rounded-full" onClick={()=>dispatch(userLogOut())}>
            Logout
          </button> : <button className="text-sm md:text-base h-full font-medium text-white bg-red-600 hover:bg-red-700 px-2 md:px-5 py-1 rounded-full">
            Login
          </button>
        }
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
