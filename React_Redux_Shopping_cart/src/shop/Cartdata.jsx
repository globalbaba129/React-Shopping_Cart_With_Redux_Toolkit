import "./carddata.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "../Redux_Toolkit/slice.js";

const Cartdata = () => {
  const { cart, totalquantity, totalprice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    const parsedQuantity = parseInt(quantity, 10);
    if (!isNaN(parsedQuantity) && parsedQuantity >= 0) {
      dispatch(updateQuantity({ id, quantity: parsedQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="sm:flex shadow-md my-10 min-w-80">
        <div className="w-full sm:w-3/4 px-10 py-10">
          <p>Cart items: {totalquantity}</p>
          {cart.map((data) => (
            <div key={data.id} className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src={data.image}
                  alt={data.name}
                  className="h-full object-center object-cover md:block hidden"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-black leading-none text-gray-800">
                    {data.name}
                  </p>
                  <input
                    type="number"
                    value={data.totalquantity}
                    onChange={(e) => handleQuantityChange(data.id, e.target.value)}
                    className="ml-4 w-20 text-center border rounded"
                    min="0"
                  />
                </div>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex items-center">
                    <button
                      onClick={() => handleRemoveItem(data.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800">
                    ${data.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mb-10">
        <Link
          to="/"
          className="bg-green-600 text-white rounded py-2 px-4 hover:bg-green-700"
        >
          Continue Shopping
        </Link>
        <Link
          to="/Ceckout"
          className="bg-indigo-500 text-white rounded py-2 px-4 hover:bg-indigo-600"
        >
          Checkout
        </Link>
      </div>

      <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>

        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm">
            <span>Total Quantity</span>
            <span>{totalquantity}</span>
          </div>
          <div className="flex font-semibold justify-between py-6 text-sm">
            <span>Total Price</span>
            <span>${totalprice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartdata;
