"use client";
import React from "react";
import  { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Image from "next/image";
import { toast } from "react-toastify";

const Page = () => {
  const { item } = useContext(CartContext);
  const handleClick = () => {
      toast.success('You are broke lil bro', {
              position: 'top-right',
              autoClose: 2000, 
            });
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-7xl text-center mt-5">Cart</h1>
      {item.length > 0 ?(
        item.map((cart) => (
          <div key={cart.id} className="bg-[#1b1b1b] p-5 m-5 rounded-lg shadow-lg flex-col flex items-center justify-center max-w-[500px]">
            <div>
              <Image
                width={230}
                height={100}
                alt=""
                src={cart.imageSrc}
              ></Image>
            </div>
            <div className="text-center md:text-lg lg:text-xl font-bold flex flex-col gap-2">
              <p className=" mt-2">{cart.category}</p>
              <p>{cart.description}</p>
              <p>Processor: {cart.specs.processor}</p>
              <p>Graphic Card: {cart.specs.graphicsCard}</p>
              <p>Motherboard: {cart.specs.motherboard}</p>
              <p>Price: {cart.price} PKR</p>
              <button onClick={handleClick} className="bg-red-600 py-2 px-4 rounded-sm hover:bg-red-900">Check Out</button>
            </div>
          </div>)
        )):(
          <h1 className="text-2xl mt-5">Cart is empty</h1>
        )}
    </div>
  );
};

export default Page;
