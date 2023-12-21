import { Container } from "@mui/material";
import Title from "../Shared/Title";
import CartRow from "./CartRow";
import UseCartItem from "../../Hooks/useCartItem";

const ShoppingCart = () => {
    const {data,refetch}=UseCartItem()

  return (
    <>
    <Title title={'My Shopping Cart'} center={true}></Title>
    <Container>
    <div className="bg-gray-100 h-screen">
        <div className="container mx-auto px-4">
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead className="border">
                    <tr>
                      <th className="text-left font-medium">Product</th>
                      <th className="text-left font-medium">Price</th>
                      <th className="text-left font-medium">Quantity</th>
                      <th className="text-left font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        data?.map(item=><CartRow key={item._id} item={item} refetch={refetch}></CartRow>)
                    }
                   
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>$19.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>$1.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">$21.98</span>
                </div>
                <button className="bg-primary text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </>
  );
};

export default ShoppingCart;