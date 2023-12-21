import { Link } from "react-router-dom";

const NewsCard = () => {
  return (
    <>
      <div className="relative rounded-2xl mb-20">
        <div></div>
        <div className="shadow-xl">
          <img src="/src/assets/tomato.png" className="rounded-lg" alt="" />
        </div>
        <div className="bg-[#EDF2EE] border border-soft-primary rounded-lg p-5 absolute  bottom-[-10%] shadow-[0px_20px_35px_0px_rgba(167,167,167,0.25)] m-4">
          <h2 className="text-black font-semibold text-xl">
            The Benefits of Vitamin D & How to Get It
          </h2>
          <p className="text-text font-light text-sm mt-3 mb-6">
            Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex.
            Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.
          </p>
          <Link to={'/news/single-news'}>
          <button className="border-2 rounded-3xl border-primary px-5 py-2 font-medium text-black">
            Read More
          </button>
          </Link>

        </div>
      </div>
    </>
  );
};

export default NewsCard;
