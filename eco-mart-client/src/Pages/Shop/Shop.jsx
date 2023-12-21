import { Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import LeftBar from "./LeftBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ProductCard from "../../Components/Shared/ProductCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../Components/Shared/BreadCrumbs";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import UseAllProduct from "../../Hooks/useAllProduct";

const Shop = () => {
  const [age, setAge] =useState('');
  const axiosPublic=UseAxiosPublic()
  const allProduct=UseAllProduct()
  console.log(allProduct);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <BreadCrumbs></BreadCrumbs>
      <Container>
        <div className="my-5 grid grid-cols-4 gap-5">
          <div>
            <LeftBar></LeftBar>
          </div>
          <div className="col-span-3">
          <div className="mb-3">
              <FormControl sx={{  minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Sort By:</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          <div className="col-span-3 grid grid-cols-3 gap-4">
            
            {
              allProduct?.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
            }
          <ProductCard></ProductCard>
          </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Shop;
