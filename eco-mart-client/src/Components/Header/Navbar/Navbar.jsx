import { Button, Container } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../../Hooks/useAuth";
import TemporaryDrawer from "../../Cart/CartDrawer";
import { useState } from "react";
import CartDrawer from "../../Cart/CartDrawer";
import UseCartItem from "../../../Hooks/useCartItem";

const Navbar = () => {
  const { user } = UseAuth();
  const [open,setOpen]=useState(false)
  const {data,refetch}=UseCartItem()
 console.log(data);

  const navLinks = [
    {
      id: 1,
      text: "Home",
      path: "/",
    },
    {
      id: 2,
      text: "Shop",
      path: "/shop",
    },
    {
      id: 3,
      text: "News",
      path: "/news",
    },
    {
      id: 4,
      text: "About Us",
      path: "/about",
    },
    {
      id: 5,
      text: "Customer Support",
      path: "/customer-support",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <div className="flex justify-between items-center p-4">
          <div>
            <img src="/src/assets/Logo1.png" alt="" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="relative flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base leading-[1.6]outline-none transition duration-200 ease-in-out focus:border-primary focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  name="search"
                  aria-describedby="button-addon1"
                />

                <button
                  className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium   leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Search
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <Link to={'/wishList'}>
            <img src="/src/assets/Heart.png" className="cursor-pointer" alt="" 
            
            />
            </Link>
            <div className="relative cursor-pointer"
            onClick={()=>setOpen(!open)}
            >
              <div className="absolute  w-5 h-5 right-0 top-0 mr-[-5px] mt-[-3px] text-sm text-white  flex justify-center rounded-full bg-primary ">
                {data?.length}
              </div>
              <img src="/src/assets/Bag.png" alt=""
              
              />
            </div>
            {user ? (
              user?.photoURL ? (
                <img src={user?.photoURL} className="" alt="" />
              ) : (
                <img src="/src/assets/user_3 1.png" className="" alt="" />
              )
            ) : (
              <Link to={"/userAccount"}>
                <button className="bg-primary px-2 rounded-md text-white py-1 hover:bg-hard-primary">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </Container>

      <div className=" bg-[#333] py-2 ">
        <Container>
          <nav className="flex  justify-between text-white border-none items-center">
            <div className="flex gap-1 justify-center items-center">
              {navLinks?.map((link) => (
                <NavLink
                  to={link.path}
                  key={link.id}
                  className={({ isActive }) =>
                    isActive
                      ? "px-5 text-white bg-primary py-2 font-medium"
                      : "px-5 text-text font-medium hover:text-primary"
                  }
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
            <div>
              <PhoneInTalkIcon />
              (219) 555-0114
            </div>
          </nav>
        </Container>
      </div>
      <CartDrawer open={open} setOpen={setOpen}></CartDrawer>
    </>
  );
};

export default Navbar;
