import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import News from "../Pages/News/News";
import Customer from "../Pages/CustomerSupport/Customer";
import NewsDetail from "../Pages/News/NewsDetail";
import ProductDetail from "../Pages/Shop/ProductDetail";
import axios from "axios";
import UserAccount from "../Authentication/UserAccount";
import Wishlist from "../Components/Wishlist/Wishlist";
import ShoppingCart from "../Components/Cart/ShoppingCart";

const Router = createBrowserRouter([
  {
    path: "/",
    // errorElement:<Error></Error>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path:'/shop/detail/:name',
        element:<ProductDetail></ProductDetail>,
        loader: ({params})=> fetch(`http://localhost:5000/shop/detail/${params.name}`)
      },
      {
        path: "/news",
        element: <News></News>,
      },
      {
        path:'/news/single-news',
        element:<NewsDetail></NewsDetail>
      },
      {
        path: "/About",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/customer-support",
        element: <Customer></Customer>,
      },
      {
        path:'/userAccount',
        element:<UserAccount></UserAccount>
      },
      {
        path:'/wishList',
        element:<Wishlist></Wishlist>
      },
      {
        path:'/shopping-cart',
        element:<ShoppingCart></ShoppingCart>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);

export default Router;
