import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import ProtectedRoute from "../components/ProtectedRoute";
import Cart from "../page/Cart";
import CategoryWise from "../page/CategoryWise";
import ForgotPassword from "../page/ForgotPassword";
import Home from "../page/Home";
import Product from "../page/Product";
import ProductSearch from "../page/ProductSearch";
import Profile from "../page/Profile";
import SignIn from "../page/SignIn";
import SignUp from "../page/SignUp";
import Upload from "../page/Upload";
import ResetPassoword from "../page/ResetPassoword";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/forgotpassword" element={<ForgotPassword/>}/>
            <Route path="/reset-password/:id" element={<ResetPassoword/>}/>
            <Route path="/upload" element={<Upload/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/search" element={<ProductSearch/>}/>
            <Route path="/category/:category" element={<CategoryWise/>}/>
        </Route>
    ))


export default router