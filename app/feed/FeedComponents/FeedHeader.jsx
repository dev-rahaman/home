"use client";
import { DropdownIcon, SearchIcon } from "@/app/icons/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const items = [
  { name: "Home", href: "/" },
  { name: "Article", href: "/feed/article" },
  { name: "Notice", href: "/feed/notice" },
  { name: "Classes", href: "/feed/classes" },
  { name: "Event", href: "/feed/event" },
  { name: "Video", href: "/feed/video" },
  { name: "Photo", href: "/feed/photo" },
];

const FeedHeader = () => {
  const [open, setOpen] = useState(false);
  const handleDropdown = () => {
    setOpen(!open);
  };
  return (
    <div className="relative">
      <nav className="z-50 w-full fixed  bg-[#00769C] text-white top-0 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              width={60}
              height={60}
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-black hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full bg-[#00769C] p-2 ps-10 text-sm border border-gray-300 rounded-lg outline-none"
                placeholder="Search..."
              />
            </div>

            <div className="flex items-center">
              <button
                onClick={handleDropdown}
                className="p-[10px] text-white btn rounded flex items-center justify-between w-full"
              >
                <DropdownIcon />
              </button>
            </div>
            {open && (
              <ul className="w-[150px] h-[150px] z-50 space-y-4 bg-[#00769C] p-3 rounded absolute right-6  top-[52px]">
                <li>
                  <a
                    href="#"
                    className=" hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="  hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    Library
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li className="flex">
                {items.map((item, idx) => (
                  <div key={idx}>
                    <Link href={`${item.href}`} className="p-5">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FeedHeader;
