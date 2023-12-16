import React from "react";
import Tags from "../FeedComponents/tagsbar/tags";
import Link from "next/link";

const Book = () => {
  return (
    <>
      <Tags />
      <div className="flex flex-wrap  gap-2 ms-5 mb-5 mt-14">
        <div className="shadow-md w-[230px] h-[350px]   ">
          <img
            src="/book.jpg"
            alt="Book Cover"
            className="w-[230px] h-[200px] mb-4 rounded"
          />
          <div className="p-2">
            <h2 className="font-bold">Mind Management, Not Time Management</h2>
            <p className="text-gray-600 my-2">By Author Name</p>
            <div className="flex justify-between items-center">
              <span className="text-green-500 font-semibold">$19.99</span>
              <Link href="/feed/book/1" className="text-white p-1 bg-green-500">
                Details
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-md w-[230px] h-[350px]   ">
          <img
            src="/book.jpg"
            alt="Book Cover"
            className="w-[230px] h-[200px] mb-4 rounded"
          />
          <div className="p-2">
            <h2 className="font-bold">Mind Management, Not Time Management</h2>
            <p className="text-gray-600 my-2">By Author Name</p>
            <div className="flex justify-between items-center">
              <span className="text-green-500 font-semibold">$19.99</span>
              <Link href="/feed/book/2" className="text-white p-1 bg-green-500">
                Details
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-md w-[230px] h-[350px]   ">
          <img
            src="/book.jpg"
            alt="Book Cover"
            className="w-[230px] h-[200px] mb-4 rounded"
          />
          <div className="p-2">
            <h2 className="font-bold">Mind Management, Not Time Management </h2>
            <p className="text-gray-600 my-2">By Author Name</p>
            <div className="flex justify-between items-center">
              <span className="text-green-500 font-semibold">$19.99</span>
              <Link href="/feed/book/3" className="text-white p-1 bg-green-500">
                Details
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-md w-[230px] h-[350px]   ">
          <img
            src="/book.jpg"
            alt="Book Cover"
            className="w-[230px] h-[200px] mb-4 rounded"
          />
          <div className="p-2">
            <h2 className="font-bold">Mind Management, Not Time Management</h2>
            <p className="text-gray-600 my-2">By Author Name</p>
            <div className="flex justify-between items-center">
              <span className="text-green-500 font-semibold">$19.99</span>
              <Link href="/feed/book/1" className="text-white p-1 bg-green-500">
                Details
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-md w-[230px] h-[350px]   ">
          <img
            src="/book.jpg"
            alt="Book Cover"
            className="w-[230px] h-[200px] mb-4 rounded"
          />
          <div className="p-2">
            <h2 className="font-bold">Mind Management, Not Time Management</h2>
            <p className="text-gray-600 my-2">By Author Name</p>
            <div className="flex justify-between items-center">
              <span className="text-green-500 font-semibold">$19.99</span>
              <Link href="/feed/book/2" className="text-white p-1 bg-green-500">
                Details
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-md w-[230px] h-[350px]   ">
          <img
            src="/book.jpg"
            alt="Book Cover"
            className="w-[230px] h-[200px] mb-4 rounded"
          />
          <div className="p-2">
            <h2 className="font-bold">Mind Management, Not Time Management </h2>
            <p className="text-gray-600 my-2">By Author Name</p>
            <div className="flex justify-between items-center">
              <span className="text-green-500 font-semibold">$19.99</span>
              <Link href="/feed/book/3" className="text-white p-1 bg-green-500">
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
