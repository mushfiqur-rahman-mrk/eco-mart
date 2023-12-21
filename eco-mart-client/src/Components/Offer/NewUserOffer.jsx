import { Container } from "@mui/material";

const NewUserOffer = () => {
  return (
    <>
      <Container>
        <div className="bg-[url('/src/assets/offer2.png')] relative border p-12 flex justify-end items-center rounded-lg">
            <div className="w-full h-full bg-black absolute lg:opacity-30 opacity-50 top-0 left-0 rounded-lg"></div>
          <div className="p-5 z-10">
            <p className="text-primary font-poppins font-semibold text-lg">Get</p>
            <h1 className="text-white text-5xl my-3 font-bold "><span className="text-[#FF8A00] mr-4">20%</span>OFF</h1>
            <h3 className="text-white text-xl my-4 font-normal">On Your First order</h3>
            <button className="bg-primary px-10 py-3 text-lg font-medium rounded-3xl text-white">Shop now</button>
          </div>
        </div>
      </Container>
    </>
  );
};
 
export default NewUserOffer;
