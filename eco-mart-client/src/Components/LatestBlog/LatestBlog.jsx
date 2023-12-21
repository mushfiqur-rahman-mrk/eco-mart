import { Container } from "@mui/material";
 

const LatestBlog = () => {

  return (
    <>
       <Container>
        <div className="flex justify-between items-center ">
        <h1 className="text-black text-3xl font-semibold my-4 leading-relaxed">Discover weekly content about <br></br> organic food, & more</h1>
        <button className="border-2 rounded-3xl border-primary px-5 py-2 font-medium text-black">More News</button>
        </div>
        <div className="grid grid-cols-2 mt-5 mb-40 gap-5">
            <div className="relative rounded-2xl">
                <div></div>
                <div className="shadow-xl">
                    <img src="/src/assets/tomato.png" className="rounded-lg" alt="" />
                </div>
                <div className="bg-[#EDF2EE] border border-soft-primary rounded-lg p-5 absolute  bottom-[-10%] shadow-[0px_20px_35px_0px_rgba(167,167,167,0.25)] m-4">
                    <h2 className="text-black font-semibold text-xl">The Benefits of Vitamin D & How to Get It</h2>
                    <p className="text-text font-light text-sm mt-3 mb-6">Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.</p>
                    <button className="border-2 rounded-3xl border-primary px-5 py-2 font-medium text-black">More News</button>
                </div>
            </div>
            <div className="relative rounded-2xl">
                <div className="shadow-xl">
                    <img src="/src/assets/vitamin.png" className="rounded-lg" alt="" />
                </div>
                <div className="bg-[#EDF2EE] rounded-lg p-5 absolute  bottom-[-10%] shadow-[0px_20px_35px_0px_rgba(167,167,167,0.25)] m-4">
                    <h2 className="text-black font-semibold text-xl">The Benefits of Vitamin D & How to Get It</h2>
                    <p className="text-text font-light text-sm mt-3 mb-6">Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.</p>
                    <button className="border-2 rounded-3xl border-primary px-5 py-2 font-medium text-black">More News</button>
                </div>
            </div>
        </div>
       </Container>
    </>
  );
};

export default LatestBlog;