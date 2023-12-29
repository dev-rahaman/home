"use client";
import React, { useState } from "react";
import { CloseIcon, CommentIcon, LoveIcon, ShearIcon } from "@/app/icons/icons";
import parse from "html-react-parser";
import FetchData from "../FeedComponents/SmallComponents/FetchData";
import Link from "next/link";
import Image from "next/image";

const Post = () => {
  const [article, setArticle] = useState([]);
  const [notice, setNotice] = useState([]);
  const [classes, setClasses] = useState([]);
  const [video, setVideo] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [event, setEvent] = useState([]);
  const [book, setBook] = useState([]);

  const handleArticleFetched = (data) => {
    setArticle(data);
  };
  const handleNoticeFetched = (data) => {
    setNotice(data);
  };
  const handleClassesFetched = (data) => {
    setClasses(data);
  };
  const handleVideoFetched = (data) => {
    setVideo(data);
  };
  const handlePhotoFetched = (data) => {
    setPhoto(data);
  };
  const handleEventFetched = (data) => {
    setEvent(data);
  };
  const handleBookFetched = (data) => {
    setBook(data);
  };

  return (
    <div className="space-y-6 my-5">
      <FetchData endPoint="article" setData={handleArticleFetched} />
      <FetchData endPoint="notice" setData={handleNoticeFetched} />
      <FetchData endPoint="class" setData={handleClassesFetched} />
      <FetchData endPoint="video" setData={handleVideoFetched} />
      <FetchData endPoint="photo" setData={handlePhotoFetched} />
      <FetchData endPoint="event" setData={handleEventFetched} />
      <FetchData endPoint="book" setData={handleBookFetched} />

      {/* article */}
      {article.map((post, idx) => (
        <div
          key={idx}
          className={`max-w-bg-white p-4 shadow-lg rounded-lg flex flex-col bg-gray-200`}
        >
          <div className="flex items-center justify-between mb-4 ">
            <div className="flex items-center ">
              {/* <div>
                <h2>{post.user.name}</h2>
                <p className="text-gray-700 text-sm">{post.user.date}</p>
              </div> */}
            </div>
            <button
              onClick={() => toggleVisibility(post._id)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <CloseIcon />
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{post.title}</h2>
          </div>
          <div>
            {parse(`<div className="inlineContent">${post.value}</div>`)}
          </div>
          <p>{post.tags}</p>
          <div className="flex justify-between mt-5  border-y-2 py-2">
            <div className="flex items-center flex-col">
              <p>{post.like}</p>
              <button className="block">
                <LoveIcon />
              </button>
            </div>
            <div className="flex items-center flex-col">
              <p>{post.comment}</p>
              <button className="block">
                <CommentIcon />
              </button>
            </div>
            <div className="flex items-center flex-col">
              <p>{post.share}</p>
              <button className="block">
                <ShearIcon />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* notice  */}
      {notice.map((notice, idx) => (
        <div
          key={idx}
          className={`max-w-bg-white p-4 shadow-lg rounded-lg flex flex-col bg-gray-200`}
        >
          <div className="flex items-center justify-between mb-4 ">
            <div className="flex items-center ">
              {/* <div>
                <h2>{post.user.name}</h2>
                <p className="text-gray-700 text-sm">{post.user.date}</p>
              </div> */}
            </div>
            <button
              onClick={() => toggleVisibility(notice._id)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <CloseIcon />
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{notice.title}</h2>
          </div>
          <div>
            {parse(`<div className="inlineContent">${notice.value}</div>`)}
          </div>
          <p>{notice.tags}</p>
          <div className="flex justify-between mt-5  border-y-2 py-2">
            <div className="flex items-center flex-col">
              <p>{notice.like}</p>
              <button className="block">
                <LoveIcon />
              </button>
            </div>
            <div className="flex items-center flex-col">
              <p>{notice.comment}</p>
              <button className="block">
                <CommentIcon />
              </button>
            </div>
            <div className="flex items-center flex-col">
              <p>{notice.share}</p>
              <button className="block">
                <ShearIcon />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* class */}
      <div className="flex flex-wrap  gap-2 ms-5 mb-5 pt-14">
        {classes.map((notice, idx) => (
          <Link href={"/feed/classes/classDetails"} key={idx}>
            <div className="relative w-[230px] h-[255px] bg-red-500 rounded overflow-hidden shadow-lg">
              <Image
                width={230}
                height={195}
                src="/class.png"
                alt="Video Thumbnail"
                className="w-[240px] h-[130px]"
              />
              <span className="absolute top-[6.50rem] right-0 bg-black text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                27: 51
              </span>
              <div className="mt-2 flex px-1 justify-center">
                <Image
                  width={30}
                  height={30}
                  src="/profile-image.jpg"
                  alt="Profile"
                  className="h-12 w-12 rounded-full mx-auto"
                />
                <div className="ml-3">
                  <span className="text-center text-sm">
                    Search any image with Google Lens Search any image with
                    Google Lens
                  </span>
                  <p className="text-gray-800 text-sm">Dev-Rahaman</p>
                  <div className="flex text-sm">
                    <p className="text-gray-800">Views: 1M&nbsp;•&nbsp;</p>
                    <p className="text-gray-800">1 Day Ago</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Video */}
      <div className="flex flex-wrap  gap-2 ms-5 mb-5 pt-14">
        {video.map((notice, idx) => (
          <Link href={"/feed/classes/classDetails"} key={idx}>
            <div className="relative w-[230px] h-[255px] bg-red-500 rounded overflow-hidden shadow-lg">
              <Image
                width={230}
                height={195}
                src="/class.png"
                alt="Video Thumbnail"
                className="w-[240px] h-[130px]"
              />
              <span className="absolute top-[6.50rem] right-0 bg-black text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                27: 51
              </span>
              <div className="mt-2 flex px-1 justify-center">
                <Image
                  width={30}
                  height={30}
                  src="/profile-image.jpg"
                  alt="Profile"
                  className="h-12 w-12 rounded-full mx-auto"
                />
                <div className="ml-3">
                  <span className="text-center text-sm">
                    Search any image with Google Lens Search any image with
                    Google Lens
                  </span>
                  <p className="text-gray-800 text-sm">Dev-Rahaman</p>
                  <div className="flex text-sm">
                    <p className="text-gray-800">Views: 1M&nbsp;•&nbsp;</p>
                    <p className="text-gray-800">1 Day Ago</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {photo.map((post, idx) => (
        <div
          key={idx}
          className={`max-w-bg-white p-4 shadow-lg rounded-lg flex flex-col bg-gray-200`}
        >
          <div className="flex items-center justify-between mb-4 ">
            <div className="flex items-center ">
              {/* <div>
                <h2>{post.user.name}</h2>
                <p className="text-gray-700 text-sm">{post.user.date}</p>
              </div> */}
            </div>
            <button
              onClick={() => toggleVisibility(post._id)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <CloseIcon />
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{post.title}</h2>
          </div>
          <div>
            {parse(`<div className="inlineContent">${post.value}</div>`)}
          </div>
          <p>{post.tags}</p>
          <div className="flex justify-between mt-5  border-y-2 py-2">
            <div className="flex items-center flex-col">
              <p>{post.like}</p>
              <button className="block">
                <LoveIcon />
              </button>
            </div>
            <div className="flex items-center flex-col">
              <p>{post.comment}</p>
              <button className="block">
                <CommentIcon />
              </button>
            </div>
            <div className="flex items-center flex-col">
              <p>{post.share}</p>
              <button className="block">
                <ShearIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
