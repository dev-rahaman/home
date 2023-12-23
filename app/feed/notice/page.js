"use client";
import { UserIcon } from "@/app/icons/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

const Notice = () => {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/notice")
      .then((res) => res.json())
      .then((data) => {
        setNotice(data);
      });
  }, []);

  return (
    <div className="space-y-4 ">
      {notice.map((item, idx) => (
        <div className="bg-white p-5 " key={idx}>
          <Link href={`/feed/notice/${item._id}`}>
            <span className="cursor-pointer">
              {parse(
                `<div className="inlineContent">${item.value.slice(
                  0,
                  250
                )}<b>...</b></div>`
              )}
            </span>
          </Link>
          <div className="my-3 flex gap-4 text-sm">
            <div className="flex gap-1 cursor-pointer">
              <UserIcon /> <span>By administrator</span>
            </div>
            <div className="flex gap-1">
              <UserIcon /> <span>{item.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notice;
