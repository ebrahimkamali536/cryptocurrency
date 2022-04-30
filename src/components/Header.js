import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("USD")
  return (
    <div className="px-4 py-2 md:px-8 md:py-4 shadow-xl bg-inherit flex items-center justify-between">
      <Link to="/">
        <h1 className="text-yellow-500 font-bold  md:text-lg">Crypto Currency</h1>
      </Link>

      <div onClick={() => setIsActive(prevActive => !prevActive)} className="dark:text-gray-300 border rounded-md py-0.5 md:py-1 px-1 md:px-2 relative cursor-pointer w-16 md:w-20">
        <div className="flex items-center justify-between">
          <span>{selected}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className={isActive ? "flex flex-col items-center absolute top-10 w-full left-0 rounded-md bg-gray-600 px-2" : "hidden"}>
            <span onClick={() => setSelected("USD")} className="py-1">USD</span>
            <span onClick={() => setSelected("INR")} className="pb-1">INR</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
