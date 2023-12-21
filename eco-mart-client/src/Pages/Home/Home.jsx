import BestSeller from "../../Components/BestSeller/BestSeller";
import Banner from "../../Components/Header/Banner/Banner";
import LatestBlog from "../../Components/LatestBlog/LatestBlog";
import NewProduct from "../../Components/NewProduct/NewProduct";
import NewUserOffer from "../../Components/Offer/NewUserOffer";
import TopCategory from "./ByCategory/TopCategory";

const Home = () => {

  return (
    <>
       <Banner></Banner>
       <TopCategory></TopCategory>
       <BestSeller></BestSeller>
       <NewUserOffer></NewUserOffer>
       <NewProduct></NewProduct>
       <LatestBlog></LatestBlog>

    </>
  );
};

export default Home;