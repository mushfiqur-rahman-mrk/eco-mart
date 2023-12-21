import CloseIcon from "@mui/icons-material/Close";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import UseAuth from "../../Hooks/useAuth";

const WishRow = ({ item, refetch }) => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  console.log(Object.keys(item).join(","));
  const { _id, name, price, stock, userName, userEmail, category, image } =
    item || {};
  console.log(item);

  const handleCart = async () => {
    console.log("object");
    const cartData = {
      productid: _id,
      name,
      category,
      image,
      price,
      stock,
      count: 1,
      userName,
      userEmail,
    };
    const cart = await axiosSecure.post("/cart", cartData);
    console.log(cart.data);
    if (cart.data.insertedId) {
      axiosSecure.delete(`/wishList/${_id}`).then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
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
          refetch();
        }
      });
    }
  };
  const handleDelete = (id) => {
    console.log(id);
    axiosSecure.delete(`/wishList/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        toast.success(`'${name}' removed form your wishlist`, {
          position: "top-center",
          autoClose: 1000,
        });
        refetch();
      }
    });
  };

  return (
    <>
      <tr>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">
            <div className="w-12 h-12 flex-shrink-0 mr-2 sm:mr-3">
              <img
                className="rounded-full"
                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                width="60"
                height="60"
                alt="Alex Shatov"
              />
            </div>
            <div className="font-medium text-gray-800">{name}</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left">$ {price}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-green-500">
            {stock > 0 ? (
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                In Stock
              </span>
            ) : (
              <span className="bg-red-100 text-red-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-700 dark:text-red-300">
                Out of stock
              </span>
            )}
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-lg text-center flex justify-center items-center gap-4">
            {stock > 0 ? (
              <button
                onClick={handleCart}
                className="px-3 cursor-pointer text-sm py-1 rounded-xl bg-primary text-white "
              >
                Add to Cart
              </button>
            ) : (
              <button className="px-3 cursor-not-allowed py-1 text-sm rounded-xl bg-white border  text-text ">
                Add to Cart
              </button>
            )}
            <div
              onClick={() => handleDelete(_id)}
              className="border w-5 h-5 p-3 rounded-full flex justify-center items-center"
            >
              <CloseIcon sx={{ color: "gray", fontSize: "20px" }}></CloseIcon>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default WishRow;
