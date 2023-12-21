import { Container } from "@mui/material";
import Title from "../../../Components/Shared/Title";

const TopCategory = () => {

  return (
    <>
       <Container>
        <Title title={'Shop by Top Categories'}></Title>
        <div className="flex gap-3 py-5">
            <div className="border-[#E6E6E6] rounded-xl flex justify-center items-center flex-col gap-5 px-0 py-6 hover:border-soft-primary hover:border-2 border-2 hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)]">
                <img src="/src/assets/image 1.png" alt="" />
                <h3 className="font-normal text-lg text-black">Fresh Fruit</h3>
            </div>
            <div className="border-[#E6E6E6] rounded-xl flex justify-center items-center flex-col gap-5 px-0 py-6 hover:border-soft-primary hover:border-2 border-2 hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)]">
                <img src="/src/assets/image 1.png" alt="" />
                <h3 className="font-normal text-lg text-black">Fresh Fruit</h3>
            </div>
            <div className="border-[#E6E6E6] rounded-xl flex justify-center items-center flex-col gap-5 px-0 py-6 hover:border-soft-primary hover:border-2 border-2 hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)]">
                <img src="/src/assets/image 1.png" alt="" />
                <h3 className="font-normal text-lg text-black">Fresh Fruit</h3>
            </div>
            <div className="border-[#E6E6E6] rounded-xl flex justify-center items-center flex-col gap-5 px-0 py-6 hover:border-soft-primary hover:border-2 border-2 hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)]">
                <img src="/src/assets/image 1.png" alt="" />
                <h3 className="font-normal text-lg text-black">Fresh Fruit</h3>
            </div>
            <div className="border-[#E6E6E6] rounded-xl flex justify-center items-center flex-col gap-5 px-0 py-6 hover:border-soft-primary hover:border-2 border-2 hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)]">
                <img src="/src/assets/image 1.png" alt="" />
                <h3 className="font-normal text-lg text-black">Fresh Fruit</h3>
            </div>
            <div className="border-[#E6E6E6] rounded-xl flex justify-center items-center flex-col gap-5 px-0 py-6 hover:border-soft-primary hover:border-2 border-2 hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)]">
                <img src="/src/assets/image 1.png" alt="" />
                <h3 className="font-normal text-lg text-black">Fresh Fruit</h3>
            </div>
             
        </div>
       </Container>
    </>
  );
}; 

export default TopCategory;