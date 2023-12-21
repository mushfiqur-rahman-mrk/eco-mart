import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./useAxiosSecure";
import UseAuth from "./useAuth";

const UseCartItem = () => {
    const axiosSecure = UseAxiosSecure()
    const {user}=UseAuth()
    const { data,refetch } = useQuery({
      queryKey: ["cart-items"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/cart/${user?.email}`);
        return res.data
      },
    });
  
    return {data,refetch};
   
};

export default UseCartItem;