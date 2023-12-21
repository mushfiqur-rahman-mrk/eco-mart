import { Container } from "@mui/material";
import Title from "../Shared/Title";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const BestSeller = () => {
  return (
    <>
      <Container>
        <Title title={"Best Seller Products"}></Title>
    
          <div className="grid grid-cols-4 gap-4 my-16">
            <div
              className="border-[#E6E6E6] relative  rounded-xl flex justify-between items-center flex-col px-0 py-4 hover:border-soft-primary hover:border-2 border-2 hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] transition-all duration-300"
            >
              <div className="border-[#CCCCCC] border-2 absolute right-1 top-3  rounded-full p-1.5 w-10 h-10 mr-3 ">
                <FavoriteBorderIcon
                  sx={{ color: "#1A1A1A", "&:hover": { color: "#00B207" } }}
                ></FavoriteBorderIcon>
              </div>

              <div>
                <img src="/src/assets/apple.png" alt="" />
              </div>
              <div className="flex justify-between items-center   w-full px-5">
                <div>
                  <h2 className="text-text font-normal text-base">
                    Green Apple
                  </h2>
                  <p>$14.99</p>
                  rating
                </div>
                <div className="bg-[#F2F2F2] rounded-full p-1 hover:bg-soft-primary text-white">
                  <img src="/src/assets/Bag.png" className="" alt="" />
                </div>
              </div>
            </div>


  
          </div>
 
      </Container>
    </>
  );
};

export default BestSeller;
