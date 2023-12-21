import { toast } from "react-toastify";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";
import UseCartItem from "../../Hooks/useCartItem";
import { Link } from "react-router-dom";

const CartDrawer = ({open,setOpen}) => {
    const axiosSecure=UseAxiosSecure()
    const {data,refetch}=UseCartItem()

    const handleDelete=(id)=>{
        console.log(id);
        axiosSecure.delete(`/cart/${id}`).then((res) => {
            console.log(res.data);
            if (res.data.deletedCount) {
              toast.success(`'Item removed form your cart`, {
                position: "top-center",
                autoClose: 1000,
              });
              refetch();
            }
          });

    }


  return (
    <>
      <div
        className={`${open ? 'block':'hidden'} relative z-40`}
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        className="text-lg font-medium text-gray-900"
                        id="slide-over-title"
                      >
                        Shopping cart
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={()=>setOpen(!open)}
                          className={`relative -m-2 p-2 bg-soft-primary rounded-full text-gray-900 hover:text-gray-500`}
                        >
                          <span className="absolute -inset-0.5"></span>
                          <span className="sr-only">Close panel</span>
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                     {
                        data?.map(item=>     <li className="flex py-6" key={item._id}>
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                {item?.name}
                              </h3>
                              <p className="ml-4">${item?.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {item?.category}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">Qty - {item?.count}</p>

                            <div className="flex">
                              <button
                              onClick={()=>handleDelete(item?._id)}
                                type="button"
                                className="font-medium text-red-600 hover:text-red-500"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>)
                     }
                        
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>$262.00</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <button
                        
                        className="flex items-center justify-center rounded-lg border border-transparent w-full bg-primary py-3 text-base font-medium text-white shadow-sm hover:bg-white hover:text-black hover:border-primary transition duration-300"
                      >
                        Checkout
                      </button>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                       
                        <Link to={'/shopping-cart'}>
                        <button
                          type="button"
                          className="font-medium text-primary border w-full py-3 rounded-lg shadow-lg hover:bg-soft-primary hover:text-black transition duration-300 "
                        >
                          Go to cart
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                        </Link>
                       
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;