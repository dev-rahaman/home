"use client";
import { DropdownTwoIcon, ReportIcon } from "@/app/icons/icons";
import { useEffect, useState } from "react";

const BookDetails = ({ params }) => {
  const [books, seBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/book")
      .then((res) => res.json())
      .then((data) => {
        seBooks(data);
      });
  }, []);

  const findBook = books.find((item) => item._id === params.id);

  return (
    <>
      <div className="bg-white p-6 shadow-md flex mt-5">
        <div className="w-1/2 pr-6">
          <img
            src="/book.jpg"
            alt="Book Cover"
            className="w-[200px] h-[250px]"
          />
          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center flex-col justify-center">
              <div className="bg-[#0E6C14] w-[200px] text-white flex items-center justify-center p-2">
                <p>Download</p>
                <span>
                  <DropdownTwoIcon />
                </span>
              </div>
              <p className="text-yellow-500 text-xl">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </p>
              <p className="text-gray-600 ml-2">550</p>
              <button className="flex items-center justify-center text-blue-500 hover:underline">
                <ReportIcon /> Report
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <img
              src="/book.jpg"
              alt="Book Cover"
              className="w-[50px] rounded-full h-[50px] rounded"
            />
            <div className="text-gray-600 ">
              <p>{findBook?.bookAuthor}</p>
              <p>{findBook?.time}</p>
            </div>
          </div>
          <h2 className="text-[#4C4C4C] font-extrabold text-4xl mt-5">
            {findBook?.bookName}
            {/* {findBook?.bookTitle} */}
          </h2>
          <div className="flex gap-2 mt-20">
            <button className="bg-blue-700 p-2 text-white">Facebook</button>
            <button className="bg-red-600 p-2 text-white">Instagram</button>
            <button className="bg-[#c8232c] p-2 text-white">Linkedin</button>
            <button className="bg-[#0088cc] p-2 text-white">Telegram</button>
          </div>
        </div>
      </div>
      {/* Book Details */}
      <div className="bg-white p-6 shadow-md my-5">
        <p className="font-bold uppercase text-[#4C4C4C] border-b-2">
          Description
        </p>
        <p className="py-4">{findBook?.bookDescription}</p>
        <p className="font-bold uppercase text-[#4C4C4C] border-b-2">
          Detail of {findBook?.bookName}
        </p>

        <table className="w-full bg-white border border-gray-300 mt-5">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Attribute</th>
              <th className="py-2 px-4 border-b">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Book Title</td>
              <td className="py-2 px-4 border-b">{findBook?.bookTitle}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Price</td>
              <td className="py-2 px-4 border-b">{findBook?.bookPrice}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Number of Pages</td>
              <td className="py-2 px-4 border-b">{findBook?.bookPages}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Author Name</td>
              <td className="py-2 px-4 border-b">{findBook?.bookAuthor}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Category</td>
              <td className="py-2 px-4 border-b">{findBook?.bookCategory}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Original Published</td>
              <td className="py-2 px-4 border-b">
                {findBook?.originalPublisher}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Audio</td>
              <td className="py-2 px-4 border-b">{findBook?.bookAudio}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Language</td>
              <td className="py-2 px-4 border-b">{findBook?.bookLanguage}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookDetails;
