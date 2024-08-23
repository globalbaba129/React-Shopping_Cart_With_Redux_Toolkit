import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux_Toolkit/slice.js";

const Card = () => {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cart.items);

    return (
        <>
            <div className="grid grid-cols-3 gap-4 mt-20 ml-16">
                {cartData.map((item) => (
                    <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={item.image} alt={item.name} />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item.name}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                ${item.price}
                            </p>

                            <button onClick={() => dispatch(addToCart(item))} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Card;
