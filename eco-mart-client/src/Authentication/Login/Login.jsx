import { useContext } from "react";
import UseAuth from "../../Hooks/useAuth";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { googleUser, login } = UseAuth();
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Loged in successfully", {
          position: "top-center",
          autoClose: 1000,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.messege);
        toast.error(error.message, {
          position: "top-center",
          autoClose: 1000,
        });
      });
  };

  const handleGoogle = () => {
    console.log("clicked");
    googleUser()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          image: result.user?.photoURL,
        };
        axiosSecure.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
          if (res.data.insertedId) {
            toast.success("Account created successfullyyy", {
              position: "top-center",
              autoClose: 1000,
            });
          }
        });
      })
      .catch();
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-green-500 focus:bg-white focus:outline-none"
            required
          />
          <label className="block text-gray-700 mt-3">Password</label>
          <input
            type="password"
            name="password"
            id=""
            placeholder="Enter Password"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary  focus:bg-white focus:outline-none"
            required
          />
          <button className="bg-primary w-full shadow-lg border py-2 mt-5 rounded-lg text-white">
            Sign In
          </button>
        </div>
      </form>
      <div className="text-right my-2">
        <a
          href="#"
          className="text-sm font-semibold text-gray-700 hover:text-soft-primary focus:text-green-700"
        >
          Forgot Password?
        </a>
      </div>
      <div className="flex items-center mb-3">
        <hr className="h-0 border-b border-solid border-grey-500 grow" />
        <p className="mx-4 text-grey-600">or</p>
        <hr className="h-0 border-b border-solid border-grey-500 grow" />
      </div>
      <div>
        <button
          onClick={handleGoogle}
          className="flex items-center border shadow-lg justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300 bg-white"
        >
          <img
            className="h-5 mr-2"
            src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
            alt=""
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
