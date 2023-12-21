import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import UseAuth from "../../Hooks/useAuth";

const ProductCard = ({product}) => {
  const {user}=UseAuth()
  const {_id,name,category,review,price,sellCount,description,image,brand,stock}=product || {}
  const axiosSecure=UseAxiosSecure()
  const handleCart=async()=>{
    console.log('object');
    const cartData={
      productid:_id,name,category,image,price,stock,count:1,userName:user?.displayName,userEmail:user?.email
    }
    const cart= await axiosSecure.post('/cart',cartData)
    console.log(cart.data);
    if(cart.data.insertedId){
 
      toast.success(`${name} added to your cart`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
 
        });
    }
  }

  const handleWishList=async()=>{
 
const wishList={name,productid:_id,price,stock,userName:user?.displayName,userEmail:user?.email,category,image}
const wish= await axiosSecure.post('/wishList',wishList)
 
if(wish.data.insertedId){

  toast.success(`${name} added to your wishlist`, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",

    });
}



  }




  return (
    <>
 
     <div className="border-[#E6E6E6] relative  rounded-xl flex justify-between items-center flex-col px-0 py-4 hover:border-soft-primary hover:border-[1px] border-[1px] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] transition-all duration-300">
        <div onClick={handleWishList} className="border-[#CCCCCC] border-[1px] absolute right-1 top-3  rounded-full p-1.5 w-10 h-10 mr-3 ">
          <FavoriteBorderIcon
            sx={{ color: "#1A1A1A", "&:hover": { color: "#00B207" } }}
          ></FavoriteBorderIcon>
        </div>

        <Link to={`/shop/detail/${name}`}>
        <div className="">
          <img src="/src/assets/apple.png" className="w-full h-full object-cover object-center" alt="" />
        </div>
        </Link>
        <div className="flex justify-between items-center   w-full px-5">
          <div>
            <h2 className="text-text font-normal text-base">{name}</h2>
            <p>${price}</p>
            rating
          </div>
 
          <div className="bg-[#F2F2F2] rounded-full p-1 hover:bg-soft-primary text-white" onClick={handleCart}>
            <img src="/src/assets/Bag.png" className="" alt="" />
          </div>
 
        </div>
      </div>
 
    </>
  );
};

export default ProductCard;
