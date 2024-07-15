"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

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
              <a className=" bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mx-auto ">
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
        className={`fixed z-40 bg-[#F0E5D2] overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0 w-full" : "h-full  w-full "
        }`}
      >
        {/* <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr> */}
        <div className="p-8 w-full">
          <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl ">
            <a href="#" className="pb-6 px-6 font-semibold">
              HOME
            </a>
            <Disclosure as="div" className="p-6" defaultOpen={true}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-extrabold  group-data-[hover]:/80">
                  LOST
                </span>
                <FiChevronDown className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/5 /50 flex flex-col pl-4 gap-2">
                <a href="#">PLACE</a>
                <a href="#">DATE</a>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" className="pb-6 px-6">
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 group-data-[hover]:/80 font-semibold">
                  FOUND
                </span>
                <FiChevronDown className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/5 /50 flex flex-col pl-4 gap-2">
                <a href="#">PLACE</a>
                <a href="#">DATE</a>
              </DisclosurePanel>
            </Disclosure>
            <a href="#" className="pb-6 px-6 font-semibold">
              ABOUT
            </a>
          </div>

          <div className=" w-[90%] ">
            <p className="mt-12">
              For submission of a person who is missing, please share the
              information here.
            </p>
            <a
              href="#"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2 mx-auto mt-12"
            >
              SUBMIT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
