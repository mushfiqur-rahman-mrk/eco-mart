import { Container } from "@mui/material";

const Banner = () => {

  return (
    <div className="bg-[#F2F2F2] min-h-[80vh] flex justify-center items-center">
    <Container>
    <div className="grid grid-cols-2 justify-center items-center gap-5">
          <div>
            <img src="/src/assets/banner1.png" alt="" />
          </div>
          <div>
            
            <p className="text-primary font-poppins font-light text-sm">Welcome to eco-mart</p>
            <h1 className="text-black text-5xl my-3 font-semibold leading-[60px]">Fresh & Healthy <br/> Organic Food</h1>
            <h3 className="text-black text-2xl font-thin">Sale Up to <span className="text-[#FF8A00]">30% off</span></h3>
            <p className="text-text text-sm font-light mt-3 mb-8">Free shipping on all your order. we deliver, you enjoy</p>
            <button className="bg-primary px-10 py-3 text-lg font-medium rounded-3xl text-white">Shop now</button>
          </div>
        </div>
    </Container>
      
    </div>
  );
};

export default Banner;