import React from "react";
import { FaHouse } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
const Navbar = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font mb-2">
      <div className="container flex flex-wrap p-5 items-center justify-center  border-red-600">
        
        <nav className=" flex flex-wrap items-center w-1/3 text-base justify-around ">
          <a className="mr-5 text-xl text-white  hover:text-gray-300"><FaHouse/></a>
          <a className="mr-5 text-xl text-white  hover:text-gray-300"><FaAddressCard/></a>
          <a className="mr-5 text-xl text-white  hover:text-gray-300"><FaPhone /></a>
        </nav>
        <button className="inline-flex items-center absolute right-10 bg-white border-0 py-1 px-3 ml-7 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-black">
          Signup
        </button>
        <button className="inline-flex items-center absolute right-32 bg-white border-0 py-1 px-3 ml-7 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-black">
          Login
        </button>
       
      </div>
    </header>
  );
};

export default Navbar;
