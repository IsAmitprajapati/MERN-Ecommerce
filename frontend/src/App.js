import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useLayoutEffect } from "react";
import { isLoading } from "./redux/loadingSlice";
import { getProducts } from "./redux/productSlice";
import { userLogin } from "./redux/userSlice";

function App() {
  const isLoadingState = useSelector((state) => state.loadingData.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getProducts())
  }, []);

  const token = useSelector((state) => state.user.token)
  const user = useSelector(state => state.user)
  console.log(token)

  // useLayoutEffect(()=>{
  //   dispatch(getProducts())
  // },[])

console.log("user availble",Boolean(token))
  useEffect(() => {
    if (token) {
      (
        async () => {
          const userDetailsFetch = await fetch(
            `${process.env.REACT_APP_SERVER_DOMAIN}/user/userDetails`,
            {
              method: "GET",
              headers: {
                "content-type": "application/json",
                Authorization: `JWT ${token}`
              },
            }
          )
          const userDetails = await userDetailsFetch.json()
          if (userDetails.alert == "success") {
            dispatch(userLogin(userDetails.data))
          }
        }
      )();
    }
  }, [token])

  return (
    <>
      <div className="min-w-[280px]">
        <Header />
        <main className="min-h-[calc(100vh-56px)] h-full   bg-slate-50 pt-16 ">
          <div className="max-w-[1500px] m-auto ">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>

      <>
        {/* loading  */}
        {isLoadingState && <Loading />}
      </>
    </>
  );
}

export default App;
