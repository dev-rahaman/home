"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const allMadrasa = [
  {
    image:
      "https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png",
    name: "Jamia Rashidia Feni",
    title: "Islamic University",
  },
  {
    image:
      "https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png",
    name: "Jamia Rashidia Feni",
    title: "Islamic University",
  },
  {
    image:
      "https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png",
    name: "Jamia Rashidia Feni",
    title: "Islamic University",
  },
];

const footerItem = [
  { content: "About", link: "about" },
  { content: "Accessability", link: "accessability" },
  { content: "Privacy Terms", link: "privacy-terms" },
  { content: "Help Center", link: "Help Center" },
  { content: "Business Services", link: "business-services" },
  { content: "Advertising", link: "advertising" },
  { content: "Add Choose", link: "add-choose" },
  { content: "App", link: "App" },
  { content: "More", link: "more" },
];

const RightSidebar = () => {
  const [follow, setFollow] = useState({});

  const handleFollow = (idx) => {
    setFollow((prevState) => {
      const newFollow = { ...prevState };
      newFollow[idx] = !newFollow[idx];
      return newFollow;
    });
  };

  return (
    <div className="hidden lg:block md:block mt-16 eft-sidebar w-[270px] p-4 pb-20  leading-6 h-screen overflow-x-auto custom-scrollbar ">
      <ul className="custom-bg rounded space-y-3 py-3">
        {allMadrasa.map((madrasa, idx) => (
          <li
            key={idx}
            className="flex items-start justify-center cursor-pointer"
          >
            <Image
              width={50}
              height={50}
              src={madrasa.image}
              alt="Profile"
              className="rounded-full mr-2"
            />
            <div className="space-y-[3px]">
              <h2 className="font-bold text-white">{madrasa.name}</h2>
              <p className="text-sm text-white">{madrasa.title}</p>
              <button
                className="text-[20px] btn text-white p-[4px] rounded-full w-[100px]"
                onClick={() => handleFollow(idx)}
              >
                {follow[idx] ? "Unfollow" : "Follow"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-4">
        {footerItem.map((item, idx) => (
          <Link key={idx} href={item.link} className="hover:underline text-sm">
            {item.content}
          </Link>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default RightSidebar;
