import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";
import UseAuth from "../../Hooks/useAuth";
import BreadCrumbs from "../Shared/BreadCrumbs";
import { Container } from "@mui/material";
import Title from "../Shared/Title";
import TestFile from "../Test/TestFile";
import WishTable from "./WishTable";
import TemporaryDrawer from "../Test/TestFile";
import CartDrawer from "../Cart/CartDrawer";
import { useState } from "react";

const Wishlist = () => {
  const axioSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const { data, refetch } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await axioSecure.get(`/wishList/${user?.email}`);
      return res.data;
    },
  });
  console.log(data);
 
  return (
    <>
      <BreadCrumbs></BreadCrumbs>
      
      <Container>
        <Title title={"My Wishlist"} center={true}></Title>
        {data?.length > 0 ? (
          <WishTable data={data} refetch={refetch}></WishTable>
        ) : (
          <h1>No Item in wishlist</h1>
        )}
      </Container>
      
    </>
  );
};

export default Wishlist;
