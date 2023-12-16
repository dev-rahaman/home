"use client";
import Link from "next/link";
import {
  BlogIcon,
  BookIcon,
  ClassIcon,
  DropdownIcon,
  EditIcon,
  EventIcon,
  ExploreIcon,
  HistoryIcon,
  HomeIcon,
  NoticeIcon,
  NotificationIcon,
  PhotoIcon,
  ShortIcon,
  VideoIcon,
} from "@/app/icons/icons";
import { useState } from "react";

const menus = [
  {
    name: "হোম",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    name: "প্রোফাইল",
    link: "/feed/profile",
    icon: <EditIcon />,
  },
  {
    dropdown: [
      {
        title: "School",
        icon: <BookIcon />,
        dropdownItems: [
          { name: "Classes", icon: <ClassIcon />, link: "/feed/classes" },
          { name: "Books", icon: <BookIcon />, link: "/feed/book" },
          { name: "Notice", icon: <NoticeIcon />, link: "/feed/notice" },
        ],
      },
    ],
  },
  {
    name: "আর্টিকেল",
    link: "/feed/article",
    icon: <BlogIcon />,
  },
  {
    name: "শর্ট",
    link: "/feed/short",
    icon: <ShortIcon />,
  },
  {
    name: "ভিডিও",
    link: "/feed/video",
    icon: <VideoIcon />,
  },
  {
    name: "ফটো",
    link: "/feed/photo",
    icon: <PhotoIcon />,
  },
  {
    name: "ইভেন্ট",
    link: "/feed/event",
    icon: <EventIcon />,
  },
  {
    name: "নোটিফিকেশন",
    link: "/feed/notification",
    icon: <NotificationIcon />,
  },
  {
    name: "মেসেজ",
    link: "/feed/message",
    icon: <NoticeIcon />,
  },
  {
    name: "এক্সপ্লোর",
    link: "/feed/explore",
    icon: <ExploreIcon />,
  },
  {
    name: "প্রিমিয়াম",
    link: "/feed/premium",
    icon: <NoticeIcon />,
  },
  {
    name: "হিস্টোরি",
    link: "/feed/history",
    icon: <HistoryIcon />,
  },
];

export const Item = ({ name, link, icon }) => {
  return (
    <li>
      <Link
        href={link}
        className="flex items-center p-2 text-[18px] hover:bg-[#9ab2003f] rounded-lg group"
      >
        <div className="me-2">{icon}</div>
        {name}
      </Link>
    </li>
  );
};

const DropdownMenu = ({ title, icon, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div
        className="flex items-center w-full p-2 pl-0 text-[18px] cursor-pointer hover:bg-[#9ab2003f] ps-2 text-base transition duration-75 rounded-lg group"
        onClick={toggleDropdown}
      >
        <div className="me-2">{icon}</div>
        <div className="w-full flex items-center">
          {title}
          <div className="ms-5 flex items-center justify-center w-[25px] h-[25px] rounded-full bg-gray-300">
            <DropdownIcon />
          </div>
        </div>
      </div>

      {isOpen && (
        <ul className="ms-4">
          {dropdownItems.map((item, idx) => (
            <div key={idx}>
              <Item {...item} />
            </div>
          ))}
        </ul>
      )}
    </li>
  );
};

const LeftSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ul
      className={`left-sidebar w-[270px] p-4 pb-20 leading-6 h-screen overflow-x-auto custom-scrollbar ${
        isHovered ? "show-scrollbar" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {menus.map((item, idx) =>
        "dropdown" in item ? (
          <DropdownMenu key={idx} {...item.dropdown[0]} />
        ) : (
          <Item key={idx} {...item} />
        )
      )}
    </ul>
  );
};

export default LeftSidebar;
