import { Outlet } from "react-router-dom";
import TestFile from "../../Components/Test/TestFile";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar/Navbar";
import Newsletter from "../../Components/Newsletter/Newsletter";
import UseAuth from "../../Hooks/useAuth";
 

const MainLayout = () => {
  const {user,loading}=UseAuth()
  if(loading){
    return <h1>Loading</h1>
  }

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Newsletter></Newsletter>
      <Footer></Footer>
  
 
      
    </>
  );
};

export default MainLayout;