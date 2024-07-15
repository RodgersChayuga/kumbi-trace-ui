"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const NavigationBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>;

  return (
    <nav>
      <div className=" mx-auto w-[90%] md:w-[80%] ">
        <div className="flex mx-auto justify-between  ">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-4 my-2  justify-between w-full">
            {/* logo */}
            <a
              href="/"
              className="flex gap-1 font-bold text-gray-700 items-center "
            >
              <Image src="/fist-up.png" width={100} height={100} alt={""} />
              <span>ONE PEOPLE</span>
            </a>
            <div className="hidden lg:flex gap-16 justify-center items-center">
              <a href="#">HOME</a>
              <a href="#">ABOUT</a>
              <a href="#">LOGIN</a>
              <a className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mx-auto ">
                SUBMIT
              </a>
            </div>
            {/* primary */}
          </div>
          {/* secondary */}
          {/* Mobile navigation toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              <FaBarsStaggered className="h-6" />
            </button>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8 w-full">
          <div className="flex flex-col gap-8 font-bold tracking-wider mb-12 w-[60%] mx-auto">
            <a href="#" className="border-l-4 border-gray-600">
              Features
            </a>
            <a href="#">Pricing</a>
            <a href="#">Download</a>
            <a href="#">Classic</a>
          </div>
          <div className=" w-[90%] ">
            <p>
              For submission of a person who is missing, please share the
              information here.
            </p>
            <a
              href="#"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2 mx-auto mt-12"
            >
              SUBMIT...
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
