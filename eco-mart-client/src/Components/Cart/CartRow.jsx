const CartRow = ({item,refetch}) => {

  return (
    <>
      <tr>
        <td className="py-4">
          <div className="flex items-center">
            <img
              className="h-16 w-16 mr-4"
              src="https://via.placeholder.com/150"
              alt="Product image"
            />
            <span className="font-semibold">{item?.name}</span>
          </div>
        </td>
        <td className="py-4">${item?.price}</td>
        <td className="py-4">
          <div className="flex items-center">
            <button className="border rounded-md py-2 px-4 mr-2">-</button>
            <span className="text-center w-8">1</span>
            <button className="border rounded-md py-2 px-4 ml-2">+</button>
          </div>
        </td>
        <td className="py-4">$19.99</td>
      </tr>
    </>
  );
};

export default CartRow;
