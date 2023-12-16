"use client";
import Link from "next/link";
import {
  BlogIcon,
  BookIcon,
  ClassIcon,
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

export const Item = ({ name, link, icon }) => {
  return (
    <ul>
      <li>
        <Link
          href={link}
          className="flex items-center p-2 text-[18px] hover:bg-[#9ab2003f] rounded-lg group"
        >
          <div className="me-2">{icon}</div>
          {name}
        </Link>
      </li>
    </ul>
  );
};

const items = [
  {
    name: "হোম",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    name: "ক্লাস",
    link: "/feed/classes",
    icon: <ClassIcon />,
  },
  {
    name: "আর্টিকেল",
    link: "/feed/article",
    icon: <BlogIcon />,
  },
  {
    name: "বই",
    link: "/feed/book",
    icon: <BookIcon />,
  },
  {
    name: "নোটিশঃ",
    link: "/feed/notice",
    icon: <NoticeIcon />,
  },
  {
    name: "ফটো",
    link: "/feed/photo",
    icon: <PhotoIcon />,
  },
  {
    name: "ভিডিও",
    link: "/feed/video",
    icon: <VideoIcon />,
  },
  {
    name: "শর্ট",
    link: "/feed/short",
    icon: <ShortIcon />,
  },
  {
    name: "ইভেন্ট",
    link: "/feed/events",
    icon: <EventIcon />,
  },
  {
    name: "নোটিফিকেশন",
    link: "/feed/notifications",
    icon: <NotificationIcon />,
  },
  {
    name: "মেসেজ",
    link: "/feed/message",
    icon: <NoticeIcon />,
  },

  {
    name: "প্রোফাইল",
    link: "/feed/profile",
    icon: <EditIcon />,
  },
  {
    name: "এক্সপ্লোর",
    link: "/feed/explore",
    icon: <ExploreIcon />,
  },
  {
    name: "হিস্টোরি",
    link: "/feed/history",
    icon: <HistoryIcon />,
  },
  {
    name: "প্রিমিয়াম",
    link: "/feed/premium",
    icon: <NoticeIcon />,
  },
  // {
  //   name: "পোস্ট",
  //   link: "/post",
  //   icon: <NoticeIcon />,
  // },
];

const LeftSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`left-sidebar w-[270px] p-4 pb-20 leading-6 h-screen overflow-x-auto custom-scrollbar ${
        isHovered ? "show-scrollbar" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul>
        <li>
          {items.map((item, idx) => (
            <Item
              key={idx}
              icon={item.icon}
              name={item.name}
              link={`${item.link}`}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
