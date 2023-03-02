import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isLoading } from "./redux/loadingSlice";

function App() {
  const isLoadingState = useSelector((state) => state.loadingData.isLoading);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(isLoading(false));
  //   }, 3000);
  // }, []);
  return (
    <>
      <div className="min-w-[280px]">
        <Header />
        <main className="min-h-[calc(100vh-56px)] h-full   bg-slate-50 pt-16">
          <Outlet />
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
