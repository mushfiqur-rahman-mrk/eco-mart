import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./useAxiosPublic";
import axios from "axios";

const UseAllProduct = () => {
  const axiosPublic = UseAxiosPublic();
  const { data } = useQuery({
    queryKey: ["all-product"],
    queryFn: async () => {
      const res = await axiosPublic.get("/shop");
      return res.data
    },
  });

  return data;
};

export default UseAllProduct;
