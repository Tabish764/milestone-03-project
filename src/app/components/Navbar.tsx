import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" border-b-2 shadow-xl shadow-red-500/50 backdrop-blur-md    border-red-500 py-4 flex items-center px-4 w-full"> 

        <h1 className="text-red-500 text-2xl">RenderBoost</h1>
      <div className=" max-w-7xl font-bold mx-auto justify-center items-center text-lg w-full md:flex hidden">
        <div className="flex gap-5 text-lg items-center">
          <Link className="hover:text-red-500 hover:delay-100 ease-in-out" href={'/'}>Home</Link>
          <Link className="hover:text-red-500 hover:delay-100 ease-in-out" href="/products">Products</Link>
          <Link className="hover:text-red-500 hover:delay-100 ease-in-out" href="/cart">Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
