"use client";
import Image from "next/image";
import Tags from "../FeedComponents/tagsbar/tags";
import { useEffect, useState } from "react";
import { UserIcon } from "@/app/icons/icons";
import Link from "next/link";
import parse from "html-react-parser";

const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/article")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <>
      <Tags />
      {articles.map((item, idx) => (
        <div key={idx} className=" mt-14 lg:ms-36 ms-[250px] space-y-10">
          <div className="lg:w-[500px] lg:h-[560px] rounded border-b border-[#ea8b26]">
            <Image
              src={"/image3.jpg"}
              alt="blogs"
              width={500}
              height={500}
              className="rounded md:w-full"
            />
            <div className="p-3 px-2">
              <h2 className="capitalize text-3xl font-bold">
                {item.title.slice(0, 50)}
                <b>&hellip;</b>
              </h2>
              <div className="my-5 flex gap-4 text-sm">
                <div className="flex gap-1">
                  <UserIcon /> <span>By administrator</span>
                </div>
                <div className="flex gap-1">
                  <UserIcon /> <span>{item.time}</span>
                </div>
              </div>
              <div className="inline">
                {parse(
                  `<div className="inlineContent">${item.value.slice(
                    0,
                    150
                  )}<b>...</b></div>`
                )}
              </div>
              <Link
                href={`/feed/article/${item._id}`}
                className="mt-3 text-[#ea8b26]"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Article;
