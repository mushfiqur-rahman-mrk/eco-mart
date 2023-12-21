import { Container } from "@mui/material";
import Title from "../../Components/Shared/Title";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import BreadCrumbs from "../../Components/Shared/BreadCrumbs";
import { useLoaderData, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import Counter from "./Counter";
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductDetail = () => {
  //  const name=useParams()
  const details = useLoaderData();
  const {
    _id,
    name,
    category,
    review,
    price,
    sellCount,
    description,
    image,
    brand,
    stock,
  } = details || {};

  //  const axiosPublic=UseAxiosPublic()
  //  console.log(name);
  //  const {data}=useQuery({
  //   queryKey:['product-detail'],
  //   queryFn: async()=>{
  //     const res = await axiosPublic.get(`/shop/detail/${name.name}`)
  //     return res.data
  //   }
  //  })

  // console.log(data);
  return (
    <>
      <BreadCrumbs></BreadCrumbs>
      <Container>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div>
            <img src="/src/assets/10001.jpg" alt="" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <Title title={name}></Title>

              {stock < 0 ? (
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  In Stock
                </span>
              ) : (
                <span className="bg-red-100 text-red-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-700 dark:text-red-300">
                  Out of stock
                </span>
              )}
            </div>
            <p>Review</p>
            <p>$ {price}</p>
            <hr />

            <div className="flex justify-between">
              <h1>Brand: {brand}</h1>
              <div>
                Share:
                <FacebookOutlinedIcon
                  sx={{
                    color: "#4D4D4D",
                    fontSize: "40px",
                    "&:hover": { color: "#00B207" },
                  }}
                ></FacebookOutlinedIcon>
              </div>
            </div>
            <p className="text-text py-4">{description}</p>
            <div className="flex  justify-between items-center border-y-2 p-2">
              <Counter stock={stock}></Counter>
              <button className="bg-primary px-10 py-2 rounded-full">
                Add to Cart
              </button>
              <div className="bg-green-200 p-2 rounded-full cursor-pointer">
                <div className="hidden">
                <FavoriteIcon sx={{}} className="hidden"></FavoriteIcon>
                </div>
                <FavoriteBorderOutlinedIcon sx={{color:'#00B207'}}></FavoriteBorderOutlinedIcon>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;
