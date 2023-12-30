"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppIcon, NotificationIcon, UserIcon } from "@/app/icons/icons";

const items = [
  { name: "Home", href: "/" },
  { name: "Video", href: "/feed/video" },
  { name: "Group", href: "/feed/group" },
  { name: "Marketplace", href: "/feed/marketplace" },
  { name: "Game", href: "/feed/game" },
];

const FeedHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="lg:px-10 px-3 flex items-center justify-around z-50 fixed w-full -top-[0] custom-bg">
        {/* logo  */}
        <div>
          <Link href={"/dashboard"}>
            <Image
              src="https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png"
              alt="Jamia Rashidia Feni"
              width={50}
              height={50}
            ></Image>
          </Link>
        </div>

        {/* button for sm devices  */}
        <div className="ms-4 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-[hoverColor] focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="flex gap-8">
                  {items.map((item, idx) => (
                    <div key={idx}>
                      <Link href={`${item.href}`} className="custom-text">
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right  */}
        <div className="flex items-center gap-2 me-3">
          <button className="p-[10px] text-white btn  rounded-full">
            <AppIcon />
          </button>
          <button className="p-[10px] text-white btn  rounded-full">
            <NotificationIcon />
          </button>
          <button className="p-[10px] text-white btn  rounded-full">
            <UserIcon />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="w-full h-[100%] px-2 custom-bg pt-20 pb-3 space-y-1 sm:px-3">
          <div className=" gap-8">
            {items.map((item, idx) => (
              <div key={idx}>
                <Link
                  href={`${item.href}`}
                  className="custom-text block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FeedHeader;
