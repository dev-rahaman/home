"use client";
import React, { useEffect, useState } from "react";
import Tags from "../FeedComponents/tagsbar/tags";
import Link from "next/link";

const Book = () => {
  const [books, seBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/book")
      .then((res) => res.json())
      .then((data) => {
        seBooks(data);
      });
  }, []);

  return (
    <>
      <Tags />
      <div className="flex flex-wrap  gap-2 ms-5 mb-5 mt-14">
        {books.map((item, idx) => (
          <div key={idx} className="shadow-md w-[230px] h-[335px]">
            <img
              src="/book.jpg"
              alt="Book Cover"
              className="w-[230px] h-[200px] mb-4 rounded"
            />
            <div className="p-2">
              <h2 className="font-bold">{item.bookName.slice(0, 25)}</h2>
              <p className="text-gray-600 my-2">{item.bookAuthor}</p>
              <div className="flex justify-between items-center">
                <span className="text-green-500 font-semibold">
                  {item.bookPrice}
                </span>
                <Link
                  href={`/feed/book/${item._id}`}
                  className="text-white p-1 bg-green-500"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Book;
