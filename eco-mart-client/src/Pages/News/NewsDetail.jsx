import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Container } from "@mui/material";

const NewsDetail = () => {
  return (
    <>
      <Container>
        <div className="my-20">
          <div className="flex justify-center items-center">
            <img src="/src/assets/news1.png" alt="" />
          </div>
          <div>
            <div></div>
            <h1 className="text-2xl my-5 font-medium">
              The Benefits of Vitamin D & How to Get It
            </h1>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src="/src/assets/10001.jpg"
                    className="rounded-full w-10 h-10 object-cover"
                    alt=""
                  />
                  <h3>Cameron Green</h3>
                  <br />
                  <p>time of post</p>
                </div>
                <div className="flex gap-3">
                  <FacebookOutlinedIcon
                    sx={{
                      color: "#4D4D4D",
                      fontSize: "40px",
                      "&:hover": { color: "#00B207" },
                    }}
                  ></FacebookOutlinedIcon>
                  <FacebookOutlinedIcon
                    sx={{
                      color: "#4D4D4D",
                      fontSize: "40px",
                      "&:hover": { color: "#00B207" },
                    }}
                  ></FacebookOutlinedIcon>
                  <FacebookOutlinedIcon
                    sx={{
                      color: "#4D4D4D",
                      fontSize: "40px",
                      "&:hover": { color: "#00B207" },
                    }}
                  ></FacebookOutlinedIcon>
                  <FacebookOutlinedIcon
                    sx={{
                      color: "#4D4D4D",
                      fontSize: "40px",
                      "&:hover": { color: "#00B207" },
                    }}
                  ></FacebookOutlinedIcon>
                </div>
              </div>
            </div>
            <p className="my-5 text-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              laborum accusantium magni iusto minus animi. Amet ipsam
              recusandae, natus iste eius vero cupiditate, distinctio blanditiis
              quia molestias assumenda quaerat ullam dolorem perspiciatis omnis
              autem neque harum ex eaque, facere voluptatibus excepturi.
              Sapiente explicabo, iusto dolor odit deleniti velit quos aliquid?
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-5">Leave a Comment</h3>
            <form action="">
              <div>
                <div>
                  <label className="block mb-2 text-sm font-medium ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="helper-text"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                    placeholder="Your Name"
                  />
                </div>
                <div className="my-4">
                  <label className="block mb-2 text-sm font-medium  ">
                    Email
                  </label>
                  <input
                    type="email"
                    id="helper-text"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                    placeholder="name@flowbite.com"
                  />
                </div>
              </div>

              <label className="block mb-2 text-sm font-medium  ">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-5 "
                placeholder="Write your comments here..."
              ></textarea>
              <button className="bg-primary px-10 py-3 text-lg font-medium rounded-3xl text-white">
              Post Comments
              </button>
            </form>
          </div>
          <div className="mt-16">
            <h1 className="text-lg font-semibold mb-2  ">Comments</h1>
            <hr className="h-0.5 rounded-full bg-black"></hr>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewsDetail;
