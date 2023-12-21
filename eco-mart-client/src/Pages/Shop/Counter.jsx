import { useState } from "react";

const Counter = ({stock}) => {
    const [count, setCount] = useState(0);
//   const stock = 8;
  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handledecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="border flex gap-5 px-5 py-2 rounded-full justify-center items-center">
        <button
          data-action="decrement"
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-8 rounded-full cursor-pointer outline-none"
          onClick={handledecrement}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <h1>{count}</h1>
        <button
          data-action="decrement"
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-8 rounded-full cursor-pointer outline-none"
          onClick={handleIncrement}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </>
  );
};

export default Counter;
