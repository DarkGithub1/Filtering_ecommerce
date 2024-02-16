import React from "react";
import Data from "../Data";
const Button = ({ menuItems, setItem, filerItems }) => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font ">
      <div className="container flex flex-wrap p-5 items-center justify-center  border-red-600">
        {menuItems.map((val) => (
          <button
            className="inline-flex items-center  bg-white border-0 py-1 px-3 ml-7 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-black"
            onClick={() => filerItems(val)}
          >
            {val}
          </button>
        ))}
        <button
          className="inline-flex items-center  bg-white border-0 py-1 px-3 ml-7 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-black"
          onClick={() => setItem(Data)}
        >
          all
        </button>
      </div>
    </header>
  );
};

export default Button;
